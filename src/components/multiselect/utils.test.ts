import { MultiselectProps } from "@cloudscape-design/components/multiselect";
import { describe, expect, it } from "vitest";

import MultiSelectUtils from "./utils";

const { transformMultiselectOptionsToArray, mapSelectedOptionsWithOptions } = MultiSelectUtils;

describe("MultiSelectUtils", () => {
  describe("transformMultiselectOptionsToArray", () => {
    it("should return an empty array when no options are provided", () => {
      expect(transformMultiselectOptionsToArray()).toEqual([]);
    });

    it("should return an array of strings when simple options are provided", () => {
      const options: MultiselectProps.Options = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ];
      expect(transformMultiselectOptionsToArray(options)).toEqual(["1", "2"]);
    });

    it("ignores options without a value rather than inserting undefined", () => {
      const options: MultiselectProps.Options = [{ label: "Value-less option" }];
      expect(transformMultiselectOptionsToArray(options)).toEqual([]);
    });

    it("preserves empty-string option values", () => {
      const options: MultiselectProps.Options = [{ label: "None", value: "" }];
      expect(transformMultiselectOptionsToArray(options)).toEqual([""]);
      expect(mapSelectedOptionsWithOptions(options, [""])).toEqual(options);
    });

    it("should return an array of strings when grouped options are provided", () => {
      const options: MultiselectProps.Options = [
        { label: "Group 1", options: [{ label: "Option 1", value: "1" }] },
        { label: "Option 2", value: "2" },
      ];
      expect(transformMultiselectOptionsToArray(options)).toEqual(["1", "2"]);
    });

    it("should handle nested grouped options", () => {
      // Cloudscape types only allow one level of grouping; nested groups are exercised at runtime.
      const options = [
        {
          label: "Group 1",
          options: [
            { label: "Option 1", value: "1" },
            {
              label: "Group 2",
              options: [
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
              ],
            },
          ],
        },
        { label: "Option 4", value: "4" },
      ] as unknown as MultiselectProps.Options;
      expect(transformMultiselectOptionsToArray(options)).toEqual(["1", "2", "3", "4"]);
    });
  });

  describe("mapSelectedOptionsWithOptions", () => {
    it("should return an empty array when no options or selectedOptions are provided", () => {
      expect(mapSelectedOptionsWithOptions()).toEqual([]);
      expect(mapSelectedOptionsWithOptions([{ label: "Option 1", value: "1" }])).toEqual([]);
      expect(mapSelectedOptionsWithOptions([], ["1"])).toEqual([]);
    });

    it("should return an array of selected options when simple options are provided", () => {
      const options: MultiselectProps.Options = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ];
      const selectedOptions = ["1"];
      expect(mapSelectedOptionsWithOptions(options, selectedOptions)).toEqual([
        { label: "Option 1", value: "1" },
      ]);
    });

    it("should return an array of selected options when grouped options are provided", () => {
      const options: MultiselectProps.Options = [
        { label: "Group 1", options: [{ label: "Option 1", value: "1" }] },
        { label: "Option 2", value: "2" },
      ];
      const selectedOptions = ["1"];
      expect(mapSelectedOptionsWithOptions(options, selectedOptions)).toEqual([
        { label: "Option 1", value: "1" },
      ]);
    });

    it("should handle nested grouped options", () => {
      // Cloudscape types only allow one level of grouping; nested groups are exercised at runtime.
      const options = [
        {
          label: "Group 1",
          options: [
            { label: "Option 1", value: "1" },
            {
              label: "Group 2",
              options: [
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
              ],
            },
          ],
        },
        { label: "Option 4", value: "4" },
      ] as unknown as MultiselectProps.Options;
      const selectedOptions = ["2", "4"];
      expect(mapSelectedOptionsWithOptions(options, selectedOptions)).toEqual([
        { label: "Option 2", value: "2" },
        { label: "Option 4", value: "4" },
      ]);
    });

    it("should preserve empty-string selections and skip options without string values", () => {
      const options: MultiselectProps.Options = [
        { label: "Missing" },
        { label: "None", value: "" },
        { label: "One", value: "1" },
      ];

      expect(transformMultiselectOptionsToArray(options)).toEqual(["", "1"]);
      expect(mapSelectedOptionsWithOptions(options, [""])).toEqual([{ label: "None", value: "" }]);
    });
  });
});
