import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pure Imagination",
  description:
    "Pure Imagination Network is founded with an ambitious motive which is helping and supporting our fellow content creators. Our aim is creating a positive environment where you can be inspired and thrive. We are greatly honored and super lucky to be apart of your content creation career. We are committed and ensured to support you with maximum effort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
