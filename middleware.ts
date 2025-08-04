import { auth } from "@/auth";

export default auth((req) => {
  if (req.nextUrl.pathname.startsWith("/api/auth")) {
    return null;
  }
  if (!req.auth) {
    const signInUrl = new URL("/api/auth/signin", req.nextUrl.origin);
    return Response.redirect(signInUrl);
  }
  
  return null;
});
