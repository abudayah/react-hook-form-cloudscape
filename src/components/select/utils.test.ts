import { SelectProps } from "@cloudscape-design/components";
import { describe, expect, it } from "vitest";

import SelectUtils from "./utils";

describe("SelectUtils", () => {
  describe("mapSelectedOptionWithOptions", () => {
    it("should return null if no options are provided", () => {
      const selectedOption = "value1";
      const result = SelectUtils.mapSelectedOptionWithOptions(undefined, selectedOption);
      expect(result).toBeNull();
    });

    it("should return null if no selectedOption is provided", () => {
      const options: SelectProps.Options = [{ label: "Option 1", value: "value1" }];
      const result = SelectUtils.mapSelectedOptionWithOptions(options, undefined);
      expect(result).toBeNull();
    });

    it("should return null if selectedOption is not found in the options", () => {
      const options: SelectProps.Options = [{ label: "Option 1", value: "value1" }];
      const selectedOption = "value2";
      const result = SelectUtils.mapSelectedOptionWithOptions(options, selectedOption);
      expect(result).toBeNull();
    });

    it("should return the correct option if selectedOption is found in the options", () => {
      const options: SelectProps.Options = [
        { label: "Option 1", value: "value1" },
        { label: "Option 2", value: "value2" },
      ];
      const selectedOption = "value2";
      const result = SelectUtils.mapSelectedOptionWithOptions(options, selectedOption);
      expect(result).toEqual({ label: "Option 2", value: "value2" });
    });

    it("should return the correct option if selectedOption is found in a nested option group", () => {
      const options: SelectProps.Options = [
        { label: "Option 1", value: "value1" },
        {
          label: "Group 1",
          type: "header",
          options: [
            { label: "Option 2", value: "value2" },
            { label: "Option 3", value: "value3" },
          ],
        },
      ];
      const selectedOption = "value3";
      const result = SelectUtils.mapSelectedOptionWithOptions(options, selectedOption);
      expect(result).toEqual({ label: "Option 3", value: "value3" });
    });

    it("should handle multiple nested option groups", () => {
      const options: SelectProps.Options = [
        {
          label: "Group 1",
          type: "header",
          options: [
            { label: "Option 1", value: "value1" },
            {
              label: "Group 2",
              type: "header",
              options: [
                { label: "Option 2", value: "value2" },
                { label: "Option 3", value: "value3" },
              ],
            },
          ],
        },
      ];
      const selectedOption = "value3";
      const result = SelectUtils.mapSelectedOptionWithOptions(options, selectedOption);
      expect(result).toEqual({ label: "Option 3", value: "value3" });
    });
  });
});
