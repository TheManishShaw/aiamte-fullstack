"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      {/*
      <head /> will contain the components returned by the nearest parent
      head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <head />

      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
