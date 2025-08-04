import { useFormik } from "formik";
import * as Yup from "yup";

type FormValues = {
    file: File | null;
}

export function useFileUpload() {
    const formik = useFormik<FormValues>({
        initialValues: {
            file: null,
        },
        validationSchema: Yup.object({
            file: Yup.mixed()
                .required("File is required")
                .test("fileSize", "File size must be less than 500MB and greater than 0", (value) => {
                    if (!value) return true;
                    return (value as File).size <= 500000000 && (value as File).size > 0;
                })
        }),
        onSubmit: async (values) => {
            console.log(values);
        }
    })
    return formik;
}