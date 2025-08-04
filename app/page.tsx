import { Suspense } from "react";
import SignIn from "@/components/app/signin";
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen flex items-center justify-center">
        <SignInPage />
      </main>
    </Suspense>
  );
}
function SignInPage() {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <SignIn />
    </div>
  );
}
