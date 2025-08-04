import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CloudUpload } from "lucide-react";
import UrlArea from "@/components/upload/url";
import Upload from "../../components/upload/upload";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">AnonShare</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Upload your file with end to end encryption 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <CloudUpload className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                File Upload
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Select a file to upload securely
              </p>
              <Upload />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              File Information
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  Password Protection
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  The file will be encrypted by default without a password.
                </p>
                <div className="space-y-4">
                  <Label>Enter Password</Label>
                  <Input type="password" placeholder="Password" className="w-full" />
                  <Label>Confirm Password</Label>
                  <Input type="password" placeholder="Confirm Password" className="w-full" />
                </div>
              </div>
              <UrlArea url="https://example.com" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
