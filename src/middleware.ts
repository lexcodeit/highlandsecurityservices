import {
    convexAuthNextjsMiddleware,
    nextjsMiddlewareRedirect,
    isAuthenticatedNextjs, // keep if you still want an auth check
} from "@convex-dev/auth/nextjs/server";
import { NextResponse } from "next/server";

export default convexAuthNextjsMiddleware(async request => {
    const { pathname } = new URL(request.url);

    // ✅  Catch every /jofa-admin/* request
    if (pathname.startsWith("/control-admin")) {
        // ▸ If you still want to block only when unauthenticated, uncomment:
        const isAuthenticated = await isAuthenticatedNextjs();
        if (!isAuthenticated) {
            return nextjsMiddlewareRedirect(request, "/auth");
        }

        // ▸ Otherwise, always kick them to the homepage:
        return NextResponse.next();
    }

    // Everything else sails through
    return NextResponse.next();
});

/**
 * Run the middleware only on routes that *could* match /jofa-admin
 * (and avoid static assets).
 */
export const config = {
    matcher: ["/jofa-admin/:path*", "/((?!.*\\..*|_next).*)"],
};
