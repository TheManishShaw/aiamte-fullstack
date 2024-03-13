import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Aimate",
  description: "Data service company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className="dark:bg-slate-950 bg-slate-950">
        <Providers>
          <Header />
          {children}
          <Analytics />
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
