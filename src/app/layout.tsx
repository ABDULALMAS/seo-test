/* eslint-disable */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Seo Test App",
  description: "This to to test the seo",
  verification: {
    google: "hCIcrQMgnRyeXKREgR8npH3NMf2pgXqw-1GQ6ehDt84",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
