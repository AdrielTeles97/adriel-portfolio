import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display"
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"],
    variable: "--font-body"
})

export const metadata: Metadata = {
  title: "Portfólio - Adriel Teles",
  description: "Portfólio do desenvolvedor Frontend Adriel Teles - Especialista em aplicações React, nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${outfit.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
