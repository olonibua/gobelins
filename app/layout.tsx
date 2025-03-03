import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ppNeueMontreal = localFont({
  src: [
    {
      path: '../public/fonts/ppneuemontreal-medium.otf',
      weight: '500',
      style: 'normal',
    }
  ],
  variable: '--font-pp-neue'
})

export const metadata: Metadata = {
  title: "Gobelins",
  description: "Gobelins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ppNeueMontreal.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
