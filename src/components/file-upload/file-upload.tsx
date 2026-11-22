import { FileUpload, FileUploadProps, NonCancelableCustomEvent } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

import { FocusBoundary } from "../../utils/focus-boundary";

export interface CFileUploadProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<FileUploadProps, "value"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

export const CFileUpload = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onChange,
  ...props
}: CFileUploadProps<TFieldValues, TName>) => {
  const generateFilesArray = (files: File[]) => {
    return files?.length ? files : [];
  };

  const handleOnChange = useCallback(
    (formOnChange: (files: File[]) => void, e: NonCancelableCustomEvent<FileUploadProps.ChangeDetail>) => {
      formOnChange(generateFilesArray(e.detail.value));
      onChange?.(e);
    },
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { ref, onChange, onBlur, value } }) => (
        <FocusBoundary onBlur={onBlur}>
          <FileUpload
            ref={ref}
            value={generateFilesArray(value)}
            onChange={(e) => handleOnChange(onChange, e)}
            {...props}
          />
        </FocusBoundary>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CFileUpload;
