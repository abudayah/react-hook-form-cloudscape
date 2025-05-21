import { SelectProps } from "@cloudscape-design/components";

const mapSelectedOptionWithOptions = (
  options: SelectProps.Options = [],
  selectedOption: string,
): SelectProps.Option | null => {
  let singleSelectedOption = null;
  if (options && selectedOption) {
    singleSelectedOption = options.reduce(
      (accOptions: SelectProps.Option[], currentOption: SelectProps.Option | SelectProps.OptionGroup) => {
        if ("options" in currentOption) {
          const matchedOptions = mapSelectedOptionWithOptions(currentOption.options, selectedOption);

          if (matchedOptions) {
            accOptions.push(matchedOptions);
          }
        }
        if ("value" in currentOption && currentOption.value === selectedOption) {
          accOptions.push(currentOption);
        }
        return accOptions;
      },
      [],
    )[0];
  }

  return singleSelectedOption ? singleSelectedOption : null;
};

const SelectUtils = {
  mapSelectedOptionWithOptions,
};

export default SelectUtils;
