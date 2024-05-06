import { MultiselectProps } from '@cloudscape-design/components';
export declare const transformMultiselectOptionsToArray: (selectedOptions?: MultiselectProps.Options) => string[];
export declare const mapSelectedOptionsWithOptions: (options?: MultiselectProps.Options, selectedOptions?: string[]) => Array<MultiselectProps.Option | MultiselectProps.OptionGroup>;
