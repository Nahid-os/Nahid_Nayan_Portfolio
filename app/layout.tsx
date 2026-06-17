import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Nahid Husen Nayan — Full-Stack & ML Engineer",
  description:
    "Portfolio of Md Nahid Husen Nayan — First-Class Computer Science graduate, full-stack software engineer and machine-learning engineer based in London.",
  keywords: [
    "Md Nahid Husen Nayan",
    "Full-Stack Engineer",
    "Machine Learning Engineer",
    "React",
    "Next.js",
    "London Developer",
  ],
  authors: [{ name: "Md Nahid Husen Nayan" }],
  openGraph: {
    title: "Md Nahid Husen Nayan — Full-Stack & ML Engineer",
    description:
      "First-Class CS graduate building production-grade web apps and ML systems.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f6f4ef",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
