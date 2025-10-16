import type { Metadata } from "next";
import "./globals.css";
import "./custom.css";
import "./fonts.css";
import "./animations.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Alpha Net",
  description: "KẾT NỐI KHÔNG GIỚI HẠN - CHIA SẺ KHÔNG RANH GIỚI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="relative">
        <ToastContainer />
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
      <GoogleAnalytics gaId="G-TDYXQEWDT9" />
    </html>
  );
}
