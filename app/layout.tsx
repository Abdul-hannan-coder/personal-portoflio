import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abdul Hannan Bhatti Portfolio",
  description: "Abdul Hannan Bhatti - AI Automation Expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69f78d19a4b26cb299f2eea9"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
