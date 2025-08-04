"use client";
import { Input } from "@/components/ui/input";
import { useFileUpload } from "@/lib/hooks/file-upload-hooks";
import { Plus } from "lucide-react";
import { useRef } from "react";

export default function Upload() {
  const ref = useRef<HTMLInputElement>(null);
  const formik = useFileUpload();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue("file", file);
      formik.handleSubmit();
    }
  };

  return (
    <div
      className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-8 hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-300 cursor-pointer"
      onClick={() => ref.current?.click()}
    >
      <Input ref={ref} type="file" onChange={handleFileChange} className="hidden" accept="*/*" />
      <div className="text-center">
        <Plus className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-500 dark:text-slate-400 mb-4">Click to select a file</p>
      </div>
    </div>
  );
}
