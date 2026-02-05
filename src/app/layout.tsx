import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google";
import "./globals.css";

// Using 'Inter' for a highly readable sans-serif and 'Fira Mono' for clean, developer-friendly monospaced text.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "fammo – Learn Web Development and More",
  description:
    "fammo is the platform to learn web development interactively—from fundamentals to advanced concepts. Expand your knowledge and discover new skills beyond the web, soon.",
  keywords: [
    "fammo",
    "web development",
    "learn to code",
    "coding",
    "interactive tutorials",
    "HTML",
    "CSS",
    "JavaScript",
    "frontend",
    "backend",
    "education",
    "programming",
    "learning",
  ],
  openGraph: {
    title: "fammo – Learn Web Development and More",
    description:
      "Build your skills and master web development with fammo. Learn interactively and explore new paths in tech.",
    url: "https://fammo.devflare.de",
    siteName: "fammo",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "fammo learning platform",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
