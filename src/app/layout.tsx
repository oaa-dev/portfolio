import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "John Christian Oraa | PHP Web Developer",
  description:
    "Portfolio of John Christian Oraa - a dedicated PHP web developer with 4+ years of experience specializing in Laravel, API development, and scalable backend systems.",
  keywords: [
    "developer",
    "portfolio",
    "php",
    "laravel",
    "mysql",
    "api development",
    "web development",
  ],
  authors: [{ name: "John Christian Oraa" }],
  openGraph: {
    title: "John Christian Oraa | PHP Web Developer",
    description:
      "Portfolio of John Christian Oraa - a dedicated PHP web developer specializing in Laravel, API development, and scalable backend systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Christian Oraa | PHP Web Developer",
    description:
      "Portfolio of John Christian Oraa - PHP web developer and backend engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
