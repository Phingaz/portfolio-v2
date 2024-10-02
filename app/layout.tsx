import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./_hooks/ThemeProvider";

const sora = localFont({
  src: "./fonts/Sora-VariableFont_wght.ttf",
  variable: "--font-sora",
  weight: "100 200 300 400 500 600 700 800",
});

export const metadata: Metadata = {
  title: "Prosper Agwegiokhe's Portfolio",
  description:
    "A modern and dynamic portfolio showcasing my expertise in web development, design, and technology. Built with Next.js for seamless performance, responsive design, and optimized user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="pii.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="web developer, portfolio, Next.js, frontend, backend, React, JavaScript developer, TypeScript, web design, web development, technology, software engineer, Prosper Agwegiokhe"
        />
        <meta
          property="og:title"
          content="Prosper Agwegiokhe's Portfolio | Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my web development projects and design work."
        />
        <meta property="og:image" content="https://pnoya.com/og-image.jpg" />
        <meta property="og:url" content="https://pnoya.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prosper Agwegiokhe's Portfolio | Web Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="A modern web development portfolio showcasing innovative projects."
        />
        <meta
          name="twitter:image"
          content="https://pnoya.com/twitter-image.jpg"
        />
        <link rel="canonical" href="https://pnoya.com" />
        <meta name="robots" content="index, follow" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin="anonymous"
        />
      </head>
      <ThemeProvider enableSystem attribute="class" defaultTheme="system">
        <body className={`${sora.variable} antialiased`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
