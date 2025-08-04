"use client";

import { ClipboardCopy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Props = {
  text: string;
};

export default function CopyButton({ text }: Props) {
  const onClick = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };
  return (
    <Button variant="outline" size="icon" onClick={onClick}>
      <ClipboardCopy />
    </Button>
  );
}
