import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url))
  console.log("proxy called");
  // const authToken = request.headers.get("authToken") as string;
  const authToken = request.cookies.get("jwtToken")?.value as string;

  if (!authToken) {
    return NextResponse.json(
      { message: "no token provided , access denied, message from proxy" },
      { status: 401 },
      // Unauthorized
    );
  }
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: "/api/users/profile:path*",
};
