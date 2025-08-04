import { Input } from "@/components/ui/input";
import CopyButton from "./copy-button";

type Props = {
  url: string;
};

export default function UrlArea({ url }: Props) {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
        URL to share your file
      </h3>
      <div className="flex items-center gap-2">
        <Input value={url} readOnly className="w-full" />
        <CopyButton text={url} />
      </div>
    </div>
  );
}
