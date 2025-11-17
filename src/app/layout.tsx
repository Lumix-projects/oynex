import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/shared/Navbar";
import SplashScreen from "@/components/shared/Splashscreen";
import Footer from "@/components/shared/Footer";
import { I18nProvider } from "@/components/shared/I18nProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oynex Pharma",
  description:
    "Oynex Pharma is a pharmaceutical company dedicated to developing high-quality skincare and haircare products. Our mission is to combine science and nature to deliver effective, safe, and innovative solutions that enhance your health and beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-inter`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
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
