export { auth as middleware } from "@/auth"

export const config = {
    matcher: [
        "/api/v1/:path*", // Protect all `/api` routes
        "/admin/:path*", // Protect all `/admin` routes
        "/user/:path*", // Protect all `/user` routes
    ],
};