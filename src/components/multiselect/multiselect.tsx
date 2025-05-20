import { useCallback } from 'react';
import { Control, Controller, FieldPath, FieldPathValue, FieldValues, RegisterOptions } from 'react-hook-form';
import { Multiselect, MultiselectProps, NonCancelableCustomEvent } from '@cloudscape-design/components';
import { mapSelectedOptionsWithOptions, transformMultiselectOptionsToArray } from './utils';

export interface ControlledMultiselectProps<T extends FieldValues> extends Omit<MultiselectProps, 'selectedOptions'> {
  name: FieldPath<T>;
  control?: Control<T>;
  options?: MultiselectProps.Options;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CMultiselect = <TFieldValues extends FieldValues>({
  name,
  control,
  options,
  defaultValue,
  rules,
  onBlur,
  onChange,
  shouldUnregister = false,
  ...props
}: ControlledMultiselectProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (formOnBlur: () => void, e: NonCancelableCustomEvent<MultiselectProps.MultiselectChangeDetail>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (formOnChange: (value: unknown) => void, e: NonCancelableCustomEvent<MultiselectProps.MultiselectChangeDetail>) => {
      formOnChange(transformMultiselectOptionsToArray(e.detail.selectedOptions));
      onChange?.(e);
    },
    [onChange]
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { ref, onChange, onBlur, value } }) => {
        return (
          <Multiselect
            ref={ref}
            options={options}
            selectedOptions={mapSelectedOptionsWithOptions(options, value)}
            onBlur={() => handleOnBlur.bind(null, onBlur)}
            onChange={handleOnChange.bind(null, onChange)}
            {...props}
          />
        );
      }}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CMultiselect;
