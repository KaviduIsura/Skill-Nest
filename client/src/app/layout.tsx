import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const monaSans = localFont({
  src: "../../node_modules/mona-sans/Mona-Sans.woff2",
  display: "swap",
  variable: "--font-mona-sans",
});

export const metadata: Metadata = {
  title: "Skill Nest",
  description: "AI-Powered Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
