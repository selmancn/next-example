// import { withAuth } from "next-auth/middleware";

// const redirect = () => {
//   console.log("object");
//   window.location.replace("/doldu");
// };

// export default withAuth({
//   callbacks: {
//     authorized: ({ req }) => {
//       // verify token and return a boolean
//       const sessionToken = req.cookies.get("next-auth.session-token");
//       if (sessionToken) return true;
//       else {
//         console.log("object");
//         redirect();
//         return false;
//       }
//     },
//   },
// });

// export const config = { matcher: ["/private"] };

import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("next-auth.session-token")?.value ??request.cookies.get("__Secure-next-auth.session-token")?.value  ;
  // console.log(currentUser);

  if (currentUser && request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/", request.url));
  }

  else if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
