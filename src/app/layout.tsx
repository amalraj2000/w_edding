import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { weddingConfig } from "@/config/wedding.config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: weddingConfig.website.title,
  description: weddingConfig.website.description,
  keywords: ["wedding", "invitation", "celebration", "marriage"],
  authors: [{ name: `${weddingConfig.groom.name} & ${weddingConfig.bride.name}` }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: weddingConfig.website.primaryColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
