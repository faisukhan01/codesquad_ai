import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0066FF",
};

export const metadata: Metadata = {
  title: "CodeSquad | Engineering Digital Excellence",
  description:
    "CodeSquad is a leading software development company delivering custom software solutions, cloud infrastructure, AI/ML platforms, and mobile applications. Trusted by 50+ companies worldwide with 200+ projects delivered and 99% client satisfaction.",
  keywords: [
    "software development company",
    "custom software development",
    "cloud solutions",
    "AWS",
    "Azure",
    "Google Cloud",
    "AI development",
    "machine learning",
    "mobile app development",
    "React",
    "Next.js",
    "Node.js",
    "UI/UX design",
    "DevOps",
    "agile development",
    "digital transformation",
    "CodeSquad",
  ],
  authors: [{ name: "CodeSquad", url: "https://codesquad.dev" }],
  creator: "CodeSquad",
  publisher: "CodeSquad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://codesquad.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codesquad.dev",
    siteName: "CodeSquad",
    title: "CodeSquad | Engineering Digital Excellence",
    description:
      "We build world-class software solutions that transform businesses. Custom development, cloud, AI/ML, and mobile apps — trusted by 50+ companies worldwide.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1920,
        height: 1080,
        alt: "CodeSquad - Engineering Digital Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeSquad | Engineering Digital Excellence",
    description:
      "We build world-class software solutions that transform businesses. Custom development, cloud, AI/ML, and mobile apps.",
    images: ["/images/hero-bg.png"],
  },
  alternates: {
    canonical: "https://codesquad.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
