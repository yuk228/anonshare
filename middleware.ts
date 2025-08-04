import { auth } from "@/auth";

export default auth((req) => {
  // 認証関連のページとAPIルートは除外
  if (req.nextUrl.pathname.startsWith("/api/auth")) {
    return null;
  }

  // その他のすべてのページは認証が必要
  if (!req.auth) {
    const signInUrl = new URL("/api/auth/signin", req.nextUrl.origin);
    return Response.redirect(signInUrl);
  }

  return null;
});
