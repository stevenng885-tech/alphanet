import type { Metadata } from "next";
import "./globals.css";
import "./custom.css";
import "./fonts.css";
import "./animations.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify';

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
    </html>
  );
}
