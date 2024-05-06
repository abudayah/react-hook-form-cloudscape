import { AttributeEditorProps, NonCancelableCustomEvent, AutosuggestProps, CheckboxProps, CodeEditorProps, DatePickerProps, DateRangePickerProps, InputProps, MultiselectProps, RadioGroupProps, SelectProps, TagEditorProps, TextFilterProps, TextareaProps, TilesProps, TimeInputProps, ToggleProps } from '@cloudscape-design/components';
import { FieldValues, FieldArrayPath, Control, FieldArray, UseFieldArrayRemove, UseFieldArrayAppend, ArrayPath, Path, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';

interface Definition<T> extends Omit<AttributeEditorProps.FieldDefinition<T>, 'errorText'> {
    label: string;
    errorName?: (item: T, index: number) => string;
}
interface CAttributeEditorProps<T extends FieldValues> extends Omit<AttributeEditorProps<T>, 'items' | 'onRemoveButtonClick' | 'onAddButtonClick'> {
    name: FieldArrayPath<T>;
    control?: Control<T>;
    definition: Definition<T>[];
    defaultValue: FieldArray<T>;
    handleState?: boolean;
    onRemoveButtonClick?: (event: NonCancelableCustomEvent<AttributeEditorProps.RemoveButtonClickDetail>, remove: UseFieldArrayRemove) => void;
    onAddButtonClick?: (event: NonCancelableCustomEvent<{}>, append: UseFieldArrayAppend<T, ArrayPath<T>>) => void;
}

interface CAutosuggestProps<T extends FieldValues> extends Omit<AutosuggestProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}
declare const CAutosuggest: <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onBlur, onChange, ...props }: CAutosuggestProps<T>) => _emotion_react_jsx_runtime.JSX.Element;

interface CCheckboxProps<T extends FieldValues> extends Omit<CheckboxProps, 'checked'> {
    name: Path<T>;
    control: Control<T>;
}

interface CCodeEditorProps<T extends FieldValues> extends Omit<CodeEditorProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}

interface CDatePickerProps<T extends FieldValues> extends Omit<DatePickerProps, 'value'> {
    name: FieldPath<T>;
    control?: Control<T>;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}

interface CDateRangePickerProps<T extends FieldValues> extends Omit<DateRangePickerProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}

interface CInputProps<T extends FieldValues> extends Omit<InputProps, 'value'> {
    name: FieldPath<T>;
    control?: Control<T>;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}

interface CMultiselectProps<T extends FieldValues> extends Omit<MultiselectProps, 'selectedOptions'> {
    name: FieldPath<T>;
    control?: Control<T>;
    options?: MultiselectProps.Options;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}

declare const transformMultiselectOptionsToArray: (selectedOptions?: MultiselectProps.Options) => string[];
declare const mapSelectedOptionsWithOptions: (options?: MultiselectProps.Options, selectedOptions?: string[]) => Array<MultiselectProps.Option | MultiselectProps.OptionGroup>;

interface CRadioGroupProps<T extends FieldValues> extends Omit<RadioGroupProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}

interface CSelectProps<T extends FieldValues> extends Omit<SelectProps, 'selectedOption'> {
    name: FieldPath<T>;
    control: Control<T>;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}

interface CTagEditorProps<T extends FieldValues> extends Omit<TagEditorProps, 'tags'> {
    name: Path<T>;
    control?: Control<T>;
}

interface CTextFilterProps<T extends FieldValues> extends Omit<TextFilterProps, 'filteringText'> {
    name: Path<T>;
    control?: Control<T>;
}

interface CTextareaProps<T extends FieldValues> extends Omit<TextareaProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}

interface CTilesProps<T extends FieldValues> extends Omit<TilesProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}

interface CTimeInputProps<T extends FieldValues> extends Omit<TimeInputProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}

interface CToggleProps<T extends FieldValues> extends Omit<ToggleProps, 'checked'> {
    name: Path<T>;
    control: Control<T>;
}

export { type CAttributeEditorProps, CAutosuggest, type CAutosuggestProps, type CCheckboxProps, type CCodeEditorProps, type CDatePickerProps, type CDateRangePickerProps, type CInputProps, type CMultiselectProps, type CRadioGroupProps, type CSelectProps, type CTagEditorProps, type CTextFilterProps, type CTextareaProps, type CTilesProps, type CTimeInputProps, type CToggleProps, type Definition, mapSelectedOptionsWithOptions, transformMultiselectOptionsToArray };
