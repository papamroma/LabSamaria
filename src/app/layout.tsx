import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LabSamaria | AI News, Tutorials & Insights",
  description: "Exploring the frontiers of Artificial Intelligence. News, tutorials, and insights for the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Header />
        <main style={{ minHeight: "calc(100vh - var(--header-height))" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
