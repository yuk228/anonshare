import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen pt-20">
        <SignIn />
      </main>
    </Suspense>
  );
}
function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
    </div>
  );
}
