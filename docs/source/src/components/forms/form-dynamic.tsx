import React from "react";
import { useForm, get, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Button,
  Form,
  FormField,
  SpaceBetween,
  Container,
  ContentLayout,
  Header,
} from "@cloudscape-design/components";
import {
  CInput,
  CSelect,
  CTextarea,
  CDatePicker,
  CTimeInput,
  CMultiselect,
  CRadioGroup,
  CCheckbox,
} from "react-hook-form-cloudscape";

// Define the available form types
export type FormType = "article" | "news" | "tutorial";

// Define the form data interface
interface DynamicFormData {
  // Common fields for all types
  title: string;
  content: string;
  formType: FormType;
  isPublished: boolean;
  categories: string[];

  // News-specific fields
  publishDate?: string;
  source?: string;
  category?: string;
  breakingNews?: boolean;
  timeToRead?: string;

  // Tutorial-specific fields
  difficulty?: string;
  prerequisites?: string;
  estimatedTime?: string;
  hasVideo?: boolean;
  targetAudience?: string[];
  skillLevel?: string;
}

// Create validation schema with advanced conditional validation
const validationSchema = yup.object({
  // Common validations
  title: yup
    .string()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must not exceed 100 characters"),
  content: yup.string().required("Content is required").min(50, "Content must be at least 50 characters"),
  formType: yup.string().required(),
  isPublished: yup.boolean(),
  categories: yup
    .array()
    .of(yup.string())
    .min(1, "Select at least one category")
    .required("Categories are required"),

  // News-specific validations
  publishDate: yup.string().when("formType", {
    is: "news",
    then: (schema) => schema.required("Publish date is required for news"),
    otherwise: (schema) => schema.optional(),
  }),
  source: yup.string().when("formType", {
    is: "news",
    then: (schema) => schema.required("Source is required for news"),
    otherwise: (schema) => schema.optional(),
  }),
  category: yup.string().when("formType", {
    is: "news",
    then: (schema) => schema.required("Category is required for news"),
    otherwise: (schema) => schema.optional(),
  }),
  breakingNews: yup.boolean().when("formType", {
    is: "news",
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.optional(),
  }),
  timeToRead: yup.string().when("formType", {
    is: "news",
    then: (schema) => schema.required("Time to read is required for news"),
    otherwise: (schema) => schema.optional(),
  }),

  // Tutorial-specific validations
  difficulty: yup.string().when("formType", {
    is: "tutorial",
    then: (schema) => schema.required("Difficulty level is required for tutorials"),
    otherwise: (schema) => schema.optional(),
  }),
  prerequisites: yup.string().when("formType", {
    is: "tutorial",
    then: (schema) => schema.required("Prerequisites are required for tutorials"),
    otherwise: (schema) => schema.optional(),
  }),
  estimatedTime: yup.string().when("formType", {
    is: "tutorial",
    then: (schema) => schema.required("Estimated time is required for tutorials"),
    otherwise: (schema) => schema.optional(),
  }),
  hasVideo: yup.boolean().when("formType", {
    is: "tutorial",
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.optional(),
  }),
  targetAudience: yup.array().when("formType", {
    is: "tutorial",
    then: (schema) =>
      schema
        .of(yup.string())
        .min(1, "Select at least one target audience")
        .required("Target audience is required for tutorials"),
    otherwise: (schema) => schema.optional(),
  }),
  skillLevel: yup.string().when("formType", {
    is: "tutorial",
    then: (schema) => schema.required("Skill level is required for tutorials"),
    otherwise: (schema) => schema.optional(),
  }),
});

// Default values for the form
const defaultValues: DynamicFormData = {
  title: "",
  content: "",
  formType: "article",
  isPublished: false,
  categories: [],
  publishDate: "",
  source: "",
  category: "",
  breakingNews: false,
  timeToRead: "",
  difficulty: "",
  prerequisites: "",
  estimatedTime: "",
  hasVideo: false,
  targetAudience: [],
  skillLevel: "",
};

interface Props {
  onSubmit: SubmitHandler<DynamicFormData>;
}

const FormDynamic: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  // Watch multiple form values for conditional rendering
  const formType = watch("formType") as FormType;
  const breakingNews = watch("breakingNews");

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  // Form type options
  const formTypeOptions = [
    { label: "Article", value: "article" },
    { label: "News", value: "news" },
    { label: "Tutorial", value: "tutorial" },
  ];

  // Difficulty options for tutorials
  const difficultyOptions = [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ];

  // Category options
  const categoryOptions = [
    { label: "Technology", value: "technology" },
    { label: "Science", value: "science" },
    { label: "Health", value: "health" },
    { label: "Business", value: "business" },
    { label: "Entertainment", value: "entertainment" },
  ];

  // Target audience options
  const targetAudienceOptions = [
    { label: "Students", value: "students" },
    { label: "Professionals", value: "professionals" },
    { label: "Beginners", value: "beginners" },
    { label: "Experts", value: "experts" },
  ];

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Advanced dynamic form with type-based fields and validation">
          Dynamic Form Example
        </Header>
      }
    >
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button formAction="none" onClick={() => reset()}>
                Reset
              </Button>
              <Button variant="primary" loading={isSubmitting}>
                Submit
              </Button>
            </SpaceBetween>
          }
        >
          <Container>
            <SpaceBetween size="l">
              {/* Form Type Selection */}
              <FormField label="Form Type" errorText={get(errors, "formType.message")}>
                <CSelect control={control} name="formType" options={formTypeOptions} />
              </FormField>

              {/* Common Fields */}
              <SpaceBetween size="s">
                <FormField label="Title" errorText={get(errors, "title.message")}>
                  <CInput control={control} name="title" placeholder="Enter title" />
                </FormField>

                <FormField label="Content" errorText={get(errors, "content.message")}>
                  <CTextarea
                    control={control}
                    name="content"
                    placeholder="Write your content here"
                    rows={6}
                  />
                </FormField>

                <FormField label="Categories" errorText={get(errors, "categories.message")}>
                  <CMultiselect
                    control={control}
                    name="categories"
                    options={categoryOptions}
                    placeholder="Select categories"
                  />
                </FormField>

                <FormField label="Published" errorText={get(errors, "isPublished.message")}>
                  <CCheckbox control={control} name="isPublished">
                    Mark as published
                  </CCheckbox>
                </FormField>
              </SpaceBetween>

              {/* News-specific Fields */}
              {formType === "news" && (
                <SpaceBetween size="s">
                  <FormField label="Publish Date" errorText={get(errors, "publishDate.message")}>
                    <CDatePicker control={control} name="publishDate" placeholder="Select publish date" />
                  </FormField>

                  <FormField label="Source" errorText={get(errors, "source.message")}>
                    <CInput control={control} name="source" placeholder="Enter news source" />
                  </FormField>

                  <FormField label="Category" errorText={get(errors, "category.message")}>
                    <CSelect
                      control={control}
                      name="category"
                      options={categoryOptions}
                      placeholder="Select news category"
                    />
                  </FormField>

                  <FormField label="Breaking News" errorText={get(errors, "breakingNews.message")}>
                    <CCheckbox control={control} name="breakingNews">
                      This is breaking news
                    </CCheckbox>
                  </FormField>

                  {breakingNews && (
                    <FormField label="Time to Read" errorText={get(errors, "timeToRead.message")}>
                      <CTimeInput control={control} name="timeToRead" placeholder="Enter time to read" />
                    </FormField>
                  )}
                </SpaceBetween>
              )}

              {/* Tutorial-specific Fields */}
              {formType === "tutorial" && (
                <SpaceBetween size="s">
                  <FormField label="Difficulty Level" errorText={get(errors, "difficulty.message")}>
                    <CSelect
                      control={control}
                      name="difficulty"
                      options={difficultyOptions}
                      placeholder="Select difficulty level"
                    />
                  </FormField>

                  <FormField label="Prerequisites" errorText={get(errors, "prerequisites.message")}>
                    <CTextarea
                      control={control}
                      name="prerequisites"
                      placeholder="List any prerequisites"
                      rows={3}
                    />
                  </FormField>

                  <FormField label="Estimated Time" errorText={get(errors, "estimatedTime.message")}>
                    <CTimeInput control={control} name="estimatedTime" placeholder="Enter estimated time" />
                  </FormField>

                  <FormField label="Has Video" errorText={get(errors, "hasVideo.message")}>
                    <CCheckbox control={control} name="hasVideo">
                      This tutorial includes video content
                    </CCheckbox>
                  </FormField>

                  <FormField label="Target Audience" errorText={get(errors, "targetAudience.message")}>
                    <CMultiselect
                      control={control}
                      name="targetAudience"
                      options={targetAudienceOptions}
                      placeholder="Select target audience"
                    />
                  </FormField>

                  <FormField label="Skill Level" errorText={get(errors, "skillLevel.message")}>
                    <CRadioGroup
                      control={control}
                      name="skillLevel"
                      items={[
                        { value: "beginner", label: "Beginner" },
                        { value: "intermediate", label: "Intermediate" },
                        { value: "advanced", label: "Advanced" },
                      ]}
                    />
                  </FormField>
                </SpaceBetween>
              )}
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default FormDynamic;
