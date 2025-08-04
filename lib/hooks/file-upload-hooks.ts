import { useFormik } from "formik";
import * as Yup from "yup";

type FormValues = {
  file: File | null;
};

export function useFileUpload() {
  const formik = useFormik<FormValues>({
    initialValues: {
      file: null,
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      file: Yup.mixed()
        .required("File is required")
        .test("fileSize", "File size must be less than 500MB and greater than 0 Bytes", (value) => {
          if (!value) return true;
          return (value as File).size <= 500000000 && (value as File).size > 0;
        }),
    }),
    onSubmit: async (values) => {
      if (!values.file) return;
      const errors = await formik.validateForm();
      if (Object.keys(errors).length > 0) {
        return;
      }

      const formData = new FormData();
      formData.append("file", values.file);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("File uploaded successfully");
      } else {
        alert("File upload failed");
      }
    },
  });
  return formik;
}
