import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";

import CAttributeEditor from "./attribute-editor";
import CAutosuggest from "./autosuggest";
import CCards from "./cards";
import CCheckbox from "./checkbox";
import CDatePicker from "./date-picker";
import CDateRangePicker from "./date-range-picker";
import CFileUpload from "./file-upload";
import CFormField from "./form-field";
import CInput from "./input";
import CMultiselect from "./multiselect";
import CRadioGroup from "./radio-group";
import CS3ResourceSelector from "./s3-resource-selector";
import CSelect from "./select";
import CSlider from "./slider";
import CTagEditor from "./tag-editor";
import CTextFilter from "./text-filter";
import CTextarea from "./textarea";
import CTiles from "./tiles";
import CTimeInput from "./time-input";
import CToggle from "./toggle";

const expectMounts = (Form: () => React.JSX.Element) => {
  expect(() => render(<Form />)).not.toThrow();
};

describe("wrapper mounts against real Cloudscape components", () => {
  it("CAutosuggest", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return <CAutosuggest control={control} name="value" options={[{ label: "One", value: "1" }]} />;
    };
    expectMounts(Form);
  });

  it("CCheckbox", () => {
    const Form = () => {
      const { control } = useForm<{ value: boolean }>({ defaultValues: { value: false } });
      return (
        <CCheckbox control={control} name="value">
          Value
        </CCheckbox>
      );
    };
    expectMounts(Form);
  });

  it("CDatePicker", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return <CDatePicker control={control} name="value" />;
    };
    expectMounts(Form);
  });

  it("CDateRangePicker", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return (
        <CDateRangePicker
          control={control}
          name="value"
          isValidRange={() => ({ valid: true })}
          relativeOptions={[]}
        />
      );
    };
    expectMounts(Form);
  });

  it("CFileUpload", () => {
    const Form = () => {
      const { control } = useForm<{ value: File[] }>({ defaultValues: { value: [] } });
      return <CFileUpload control={control} name="value" />;
    };
    expectMounts(Form);
  });

  it("CFormField with CInput", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return (
        <CFormField control={control} name="value" label="Value">
          <CInput control={control} name="value" />
        </CFormField>
      );
    };
    expectMounts(Form);
  });

  it("CInput", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return <CInput control={control} name="value" />;
    };
    expectMounts(Form);
  });

  it("CMultiselect", () => {
    const Form = () => {
      const { control } = useForm<{ value: string[] }>({ defaultValues: { value: [] } });
      return <CMultiselect control={control} name="value" options={[{ label: "One", value: "1" }]} />;
    };
    expectMounts(Form);
  });

  it("CSelect", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return <CSelect control={control} name="value" options={[{ label: "One", value: "1" }]} />;
    };
    expectMounts(Form);
  });

  it("CSlider", () => {
    const Form = () => {
      const { control } = useForm<{ value: number }>({ defaultValues: { value: 1 } });
      return <CSlider control={control} name="value" min={0} max={10} />;
    };
    expectMounts(Form);
  });

  it("CTextFilter", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return <CTextFilter control={control} name="value" />;
    };
    expectMounts(Form);
  });

  it("CTextarea", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return <CTextarea control={control} name="value" />;
    };
    expectMounts(Form);
  });

  it("CTimeInput", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return <CTimeInput control={control} name="value" format="hh:mm" />;
    };
    expectMounts(Form);
  });

  it("CToggle", () => {
    const Form = () => {
      const { control } = useForm<{ value: boolean }>({ defaultValues: { value: false } });
      return (
        <CToggle control={control} name="value">
          Value
        </CToggle>
      );
    };
    expectMounts(Form);
  });

  it("CAttributeEditor", () => {
    const Form = () => {
      const { control } = useForm<{ rows: { key: string }[] }>({ defaultValues: { rows: [] } });
      return (
        <CAttributeEditor
          control={control}
          name="rows"
          definition={[{ label: "Key", key: "key" }]}
          defaultValue={{ key: "" }}
          addButtonText="Add row"
        />
      );
    };
    expectMounts(Form);
  });

  it("CCards", () => {
    const Form = () => {
      const { control } = useForm<{ value: { id: string }[] }>({ defaultValues: { value: [] } });
      return (
        <CCards
          control={control}
          name="value"
          trackBy="id"
          selectionType="single"
          items={[{ id: "a" }]}
          cardDefinition={{ header: (item) => item.id }}
        />
      );
    };
    expectMounts(Form);
  });

  it("CRadioGroup", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return <CRadioGroup control={control} name="value" items={[{ label: "A", value: "a" }]} />;
    };
    expectMounts(Form);
  });

  it("CS3ResourceSelector", () => {
    const Form = () => {
      const { control } = useForm<{ value: { uri: string } }>({ defaultValues: { value: { uri: "" } } });
      return (
        <CS3ResourceSelector
          control={control}
          name="value"
          fetchBuckets={async () => []}
          fetchObjects={async () => []}
          fetchVersions={async () => []}
        />
      );
    };
    expectMounts(Form);
  });

  it("CTagEditor", () => {
    const Form = () => {
      const { control } = useForm<{ value: { key: string; value: string }[] }>({
        defaultValues: { value: [] },
      });
      return <CTagEditor control={control} name="value" />;
    };
    expectMounts(Form);
  });

  it("CTiles", () => {
    const Form = () => {
      const { control } = useForm<{ value: string }>({ defaultValues: { value: "" } });
      return <CTiles control={control} name="value" items={[{ label: "A", value: "a" }]} />;
    };
    expectMounts(Form);
  });
});
