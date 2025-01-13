import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../globals.css";
import HeadingBar from "@/components/header/HeadingBar";


const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hackathon Project",
  description: "Giaic hackathon project assignment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeadingBar />
        <div className="max-w-[1920px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
