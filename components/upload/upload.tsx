"use client";
import { Input } from "@/components/ui/input";
import { useFileUpload } from "@/lib/hooks/file-upload-hooks";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";

export default function Upload() {
  const ref = useRef<HTMLInputElement>(null);
  const formik = useFileUpload();
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && !isUploading) {
      setIsUploading(true);
      try {
        formik.setFieldValue("file", file);
        await formik.handleSubmit();
      } catch (error) {
        console.error("Upload error:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div
      className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-8 hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-300 cursor-pointer"
      onClick={() => !isUploading && ref.current?.click()}
    >
      <Input
        ref={ref}
        type="file"
        onChange={handleFileChange}
        className="hidden"
        accept="*/*"
        disabled={isUploading}
      />
      <div className="text-center">
        <Plus className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-500 dark:text-slate-400 mb-4">
          {isUploading ? "Uploading..." : "Click to select a file"}
        </p>
        {formik.errors.file && (
          <p className="text-destructive text-sm mt-2">{formik.errors.file}</p>
        )}
      </div>
    </div>
  );
}
