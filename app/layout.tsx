import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer, FloatingMap } from "@/components/shell";
import { graph, site, siteUrl } from "@/lib/site";
import "./globals.css";

const arabicFont = localFont({ src: "../node_modules/@fontsource-variable/noto-sans-arabic/files/noto-sans-arabic-arabic-wght-normal.woff2", display: "swap", variable: "--font-arabic", weight: "100 900" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "عبدالحكيم للكهرباء والإنارة الحديثة | حي الفلاح الرياض", template: "%s | عبدالحكيم للكهرباء والإنارة" },
  description: "عبدالحكيم للكهرباء والإنارة الحديثة في شارع الخطابة، حي الفلاح، الرياض. تعرف على مجالات الإنارة والكهرباء وافتح اتجاهات الموقع.",
  applicationName: site.name,
  verification: { google: "RhoDv6mIF2DsPd84eCLRiv9HGlPI-viiXPcJIJGafDM" },
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "ar_SA", siteName: site.name, title: "عبدالحكيم للكهرباء والإنارة الحديثة | الرياض", description: "الإنارة والكهرباء في حي الفلاح بالرياض. الموقع والمجالات في مكان واحد." },
  robots: { index: true, follow: true }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#101c27" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="ar" dir="rtl" className={arabicFont.variable}><body><a className="skip-link" href="#main">انتقل إلى المحتوى</a><Header />{children}<Footer /><FloatingMap /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} /></body></html>;
}
