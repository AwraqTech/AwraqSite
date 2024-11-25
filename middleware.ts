import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar"], // Supported locales
  defaultLocale: "ar",  // Default locale when no locale is provided
});

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"], // Match all routes except static files or APIs
};
