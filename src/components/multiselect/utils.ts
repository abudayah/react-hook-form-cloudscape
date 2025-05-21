import { MultiselectProps } from "@cloudscape-design/components/multiselect/interfaces";

export const transformMultiselectOptionsToArray = (
  selectedOptions: MultiselectProps.Options = [],
): string[] => {
  if (selectedOptions?.length) {
    return selectedOptions
      .map((option: MultiselectProps.Option | MultiselectProps.OptionGroup) => {
        if ("options" in option) {
          return transformMultiselectOptionsToArray(option.options);
        }

        return option.value;
      })
      .flat() as string[];
  }

  return [];
};

export const mapSelectedOptionsWithOptions = (
  options: MultiselectProps.Options = [],
  selectedOptions: string[] = [],
): Array<MultiselectProps.Option | MultiselectProps.OptionGroup> => {
  if (options?.length && selectedOptions?.length) {
    return options
      .reduce(
        (
          accOptions: Array<MultiselectProps.Option | MultiselectProps.OptionGroup>,
          currentOption,
        ) => {
          if (options?.length) {
            if ("options" in currentOption) {
              const matchedOptions = mapSelectedOptionsWithOptions(
                currentOption.options,
                selectedOptions,
              );

              if (matchedOptions?.length) {
                accOptions.push(...matchedOptions);
              }
            }

            if ("value" in currentOption) {
              if (selectedOptions.find((record) => record === currentOption.value)) {
                accOptions.push(currentOption);
              }
            }
          }

          return accOptions;
        },
        [],
      )
      .flat();
  }

  return [];
};

const MultiSelectUtils = { transformMultiselectOptionsToArray, mapSelectedOptionsWithOptions };

export default MultiSelectUtils;
