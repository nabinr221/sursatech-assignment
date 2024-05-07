import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

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
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css'
      />

      <body
        className={`min-w-screen min-h-screen flex items-center justify-center  ${inter.className}`}
        style={{
          backgroundImage: "url(/bg-img1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='w-[80%] flex items-center justify-center gap-5'>
          <div className=''>
            <Sidebar />
          </div>
          <div className='w-full h-full bg-white/30 backdrop-blur-md  p-5 rounded-2xl'>
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
