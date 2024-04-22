import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Layout/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priyanshu Chaudhary",
  description: "Frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let gaID = process.env.GA_ID ? process.env.GA_ID : "";
  return (
    <html lang="en">
      <body className={inter.className + " dark:bg-[#121212]"}>
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        <GoogleAnalytics gaId={gaID} />
      </body>
    </html>
  );
}
