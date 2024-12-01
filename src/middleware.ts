import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token");

  // مدیریت مسیر '/'
  if (pathname === "/home" && !token) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!favicon.ico|workbox*.js|workbox-c2c0676f.js|sw*.js|manifest.json|_next/static|_next/image|image).*)",
  ],
};
