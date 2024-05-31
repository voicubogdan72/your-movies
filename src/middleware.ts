import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/add-movie", "/api/get-movies-by-userId"],
  ignoredRoutes: [
    "/api/auth/callback/discord",
    "/api/auth/callback/notion",
    "/api/auth/callback/slack",
    "/api/flow",
    "/api/cron/wait",
    "/api/add-movie",
    "/api/get-movies-by-userId",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
