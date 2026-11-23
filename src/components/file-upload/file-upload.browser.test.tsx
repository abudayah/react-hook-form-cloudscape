import { useForm } from "react-hook-form";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";

import CFileUpload from "./file-upload";

test("uploads files into form state", async () => {
  const Form = () => {
    const { control, watch } = useForm<{ files: File[] }>({
      defaultValues: { files: [] },
    });

    return (
      <>
        <CFileUpload control={control} name="files" />
        <output aria-label="uploaded files">
          {watch("files")
            .map((file) => file.name)
            .join(",")}
        </output>
      </>
    );
  };

  const screen = await render(<Form />);
  const input = document.querySelector<HTMLInputElement>('input[type="file"]');

  expect(input).not.toBeNull();
  await page.elementLocator(input!).upload(new File(["hello"], "hello.txt", { type: "text/plain" }));

  await expect.element(screen.getByRole("status", { name: "uploaded files" })).toHaveTextContent("hello.txt");
});
