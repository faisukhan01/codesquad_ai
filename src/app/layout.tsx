import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeSquad | Engineering Digital Excellence",
  description:
    "CodeSquad is a leading software development company delivering custom software, cloud solutions, AI/ML, and mobile apps.",
  keywords: [
    "CodeSquad",
    "software development",
    "custom software",
    "cloud solutions",
    "AI",
    "machine learning",
    "mobile apps",
    "UI/UX design",
    "DevOps",
  ],
  openGraph: {
    title: "CodeSquad | Engineering Digital Excellence",
    description:
      "CodeSquad is a leading software development company delivering custom software, cloud solutions, AI/ML, and mobile apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
