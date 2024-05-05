import React, { useCallback } from 'react';
import { Controller, Control, Path, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { Autosuggest, AutosuggestProps, NonCancelableCustomEvent } from '@cloudscape-design/components';

export interface CAutosuggestProps<T extends FieldValues> extends Omit<AutosuggestProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
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
    (formOnBlur: Function, e: NonCancelableCustomEvent<any>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<AutosuggestProps.ChangeDetail>) => {
      formOnChange(e.detail.value);
      onChange?.(e);
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
      render={({ field: { ref, onBlur, onChange, value } }) => (
        <Autosuggest
          ref={ref}
          name={name}
          value={(value as string) || ''}
          onBlur={handleOnBlur.bind(null, onBlur)}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
    />
  );
};
