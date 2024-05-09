import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sursa Tech Assignments",
  description: "Assignments of Sursa Tech for frontend developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`min-w-screen min-h-screen flex items-center justify-center  ${inter.className}`}
        style={{
          backgroundImage: "url(/bg-img1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <StoreProvider>
          <div className='w-[90%] sm:w-[80%] flex flex-col sm:flex-row items-center justify-center gap-5'>
            <div className=''>
              <Sidebar />
            </div>
            <div className='w-full h-full bg-white/30 backdrop-blur-md  p-5 rounded-2xl'>
              <Navbar />
              {children}
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
