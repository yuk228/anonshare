import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  console.log(file);
  return NextResponse.json({ message: "File uploaded successfully" });
}
