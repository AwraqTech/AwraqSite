import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import PinnedHeader from "../ui/PinnedHeader";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import "remixicon/fonts/remixicon.css";
import SideBarMobileMenu from "../ui/SideBarMobileMenu";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import ClientWrapper from "./layouts/ClientLayout";
import "./globals.css";

// Load font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

// Define supported locales
export const locales = ["en", "ar"];

export const metadata = {
  title: "منصة أوراق | منصتك الأفضل لإدارة تجارتك",
  description:
    "منصة أوراق هي منصة تمكن التجار من إدارة أنشطتهم التجارية بكل سهولة و تيسيير",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale;

  // Validate locale
  if (!locale || !locales.includes(locale)) {
    notFound(); // Render 404 page for unsupported locales
  }

  const messages = await getMessages(params); // Load locale-specific messages
  const isArabic = locale === "ar"; // Check for Arabic

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
        <body className={ibmPlexSansArabic.className}>
          <ClientWrapper locale={locale}>
            <PinnedHeader />
            <Header />
            <SideBarMobileMenu />
            {children}
            <Footer />
          </ClientWrapper>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
