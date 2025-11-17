import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/shared/Navbar";
import SplashScreen from "@/components/shared/Splashscreen";
import Footer from "@/components/shared/Footer";
import { I18nProvider } from "@/components/shared/I18nProvider";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oynex Pharma",
  description:
    "Oynex Pharma is a pharmaceutical company dedicated to developing high-quality skincare and haircare products. Our mission is to combine science and nature to deliver effective, safe, and innovative solutions that enhance your health and beauty.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locales: string }>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locales } = await params;
  const locale = locales;
  
  // Ensure locale is valid, fallback to default if not
  const validLocale = routing.locales.includes(locale as any) 
    ? locale 
    : routing.defaultLocale;
  
  // Directly import messages for the current locale to ensure they load correctly
  const messages = (await import(`../../../messages/${validLocale}.json`)).default;
  
  const dir = validLocale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={validLocale} dir={dir}>
      <body className={`${inter.variable} antialiased font-inter`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider locale={validLocale} messages={messages}>
            <Navbar />
            <SplashScreen>
              <main>{children}</main>
              <Footer />
            </SplashScreen>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
