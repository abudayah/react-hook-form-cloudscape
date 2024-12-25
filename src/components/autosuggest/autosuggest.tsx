import React, { useCallback } from 'react';
import { Controller, Control, Path, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { Autosuggest, AutosuggestProps, NonCancelableCustomEvent } from '@cloudscape-design/components';

export interface CAutosuggestProps<T extends FieldValues> extends Omit<AutosuggestProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
  onBlur?: AutosuggestProps['onBlur'];
  onChange?: AutosuggestProps['onChange'];
}

export const CAutosuggest = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CAutosuggestProps<T>) => {
  const handleOnBlur = useCallback(
    (event: NonCancelableCustomEvent<null>) => {
      onBlur?.(event);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (event: NonCancelableCustomEvent<AutosuggestProps.ChangeDetail>) => {
      onChange?.(event);
    },
    [onChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { ref, onBlur: formOnBlur, onChange: formOnChange, value } }) => (
        <Autosuggest
          ref={ref}
          name={name}
          value={(value as string) || ''}
          onBlur={(e) => {
            formOnBlur();
            handleOnBlur(e);
          }}
          onChange={(e) => {
            formOnChange(e.detail.value);
            handleOnChange(e);
          }}
          {...props}
        />
      )}
    />
  );
};

export default CAutosuggest;
