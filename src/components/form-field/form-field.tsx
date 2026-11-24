import FormField, { FormFieldProps } from "@cloudscape-design/components/form-field";
import type { ReactNode } from "react";
import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  get,
  useFormContext,
  useFormState,
} from "react-hook-form";

export interface CFormFieldProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<FormFieldProps, "children" | "errorText"> {
  name: TName;
  control?: Control<T>;
  errorText?: FormFieldProps["errorText"];
  children: ReactNode;
}

/**
 * Connects React Hook Form field errors to Cloudscape FormField's errorText.
 * Consumers can omit control when the form is provided by FormProvider.
 */
export const CFormField = <T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>({
  name,
  control,
  errorText,
  children,
  ...props
}: CFormFieldProps<T, TName>) => {
  const methods = useFormContext<T>();
  const resolvedControl = control ?? methods?.control;

  if (!resolvedControl) {
    throw new Error(
      `CFormField "${name}" requires a React Hook Form control. Pass the control prop or wrap the component in FormProvider.`,
    );
  }

  const { errors } = useFormState({ control: resolvedControl, name });
  const fieldError = get(errors, name) as FieldError | undefined;

  return (
    <FormField {...props} errorText={errorText ?? fieldError?.message}>
      {children}
    </FormField>
  );
};

export default CFormField;
