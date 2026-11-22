import { MultiselectProps } from "@cloudscape-design/components";

export const transformMultiselectOptionsToArray = (
  selectedOptions: MultiselectProps.Options = [],
): string[] =>
  selectedOptions.flatMap((option: MultiselectProps.Option | MultiselectProps.OptionGroup) => {
    if ("options" in option) {
      return transformMultiselectOptionsToArray(option.options);
    }

    return typeof option.value === "string" ? [option.value] : [];
  });

export const mapSelectedOptionsWithOptions = (
  options: MultiselectProps.Options = [],
  selectedOptions: string[] = [],
): Array<MultiselectProps.Option | MultiselectProps.OptionGroup> => {
  if (!options.length || !selectedOptions.length) {
    return [];
  }

  return options.flatMap((currentOption: MultiselectProps.Option | MultiselectProps.OptionGroup) => {
    if ("options" in currentOption) {
      return mapSelectedOptionsWithOptions(currentOption.options, selectedOptions);
    }

    return typeof currentOption.value === "string" && selectedOptions.some((record) => record === currentOption.value)
      ? [currentOption]
      : [];
  });
};

const MultiSelectUtils = { transformMultiselectOptionsToArray, mapSelectedOptionsWithOptions };

export default MultiSelectUtils;
