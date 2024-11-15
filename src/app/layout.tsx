import type { Metadata } from "next";
import localFont from "next/font/local";
// Box icons
import "boxicons/css/boxicons.min.css";
import "./globals.css";
// Components
import Header from "@/components/Header";
import BarsBackground from "@/components/BarsBackground";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BarsBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}