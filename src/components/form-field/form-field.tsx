import { FormField, FormFieldProps } from "@cloudscape-design/components";
import type { ReactNode } from "react";
import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  get,
  useFormState,
} from "react-hook-form";

export interface CFormFieldProps<
  T extends FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
> extends Omit<FormFieldProps, "children" | "errorText"> {
  name: TName;
  control?: Control<T>;
  errorText?: FormFieldProps["errorText"];
  children: ReactNode;
}

/**
 * Connects React Hook Form field errors to Cloudscape FormField's errorText.
 * Consumers can omit control when the form is provided by FormProvider.
 */
export const CFormField = <
  T extends FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
>({
  name,
  control,
  errorText,
  children,
  ...props
}: CFormFieldProps<T, TName>) => {
  const { errors } = useFormState({ control, name });
  const fieldError = get(errors, name) as FieldError | undefined;

  return (
    <FormField {...props} errorText={errorText ?? fieldError?.message}>
      {children}
    </FormField>
  );
};

export default CFormField;
