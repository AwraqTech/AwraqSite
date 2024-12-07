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
import { headers } from "next/headers";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

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
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const header = headers();
  const localeHeader = (await header).get("x-next-intl-locale");
  if (localeHeader === null) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const isArabic = locale === "ar";

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
        <head>
          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-H69ZV9JH05"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-H69ZV9JH05');
              `,
            }}
          />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Awraq Tech | منصة أوراق",
                  "url": "https://awraq.tech",
                  "sameAs": [
                    "https://x.com/TryAwraq"
                  ]
                }
              `,
            }}
          />

          {/* Open Graph Meta Tags (Facebook, LinkedIn, Instagram) */}
          <meta property="og:title" content="Awraq Tech | منصة أوراق" />
          <meta
            property="og:description"
            content="منصة أوراق هي منصة تمكن التجار من إدارة أنشطتهم التجارية بكل سهولة و تيسيير"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://awraq.tech" />
          <meta property="og:image" content="https://i.ibb.co/JjyMdv8/Frame-3.png" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Awraq Tech | منصة أوراق" />
          <meta
            name="twitter:description"
            content="منصة أوراق هي منصة تمكن التجار من إدارة أنشطتهم التجارية بكل سهولة و تيسيير"
          />
          <meta name="twitter:image" content="https://i.ibb.co/JjyMdv8/Frame-3.png" />
          <meta name="twitter:site" content="@TryAwraq" />

          {/* Facebook Pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s) {
                  if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '918110933328228'); // Replace with your Pixel ID
                  fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=918110933328228&ev=PageView&noscript=1"
            />
          </noscript>
        </head>
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
