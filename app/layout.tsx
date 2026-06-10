import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bezawada Priyavardhan - Portfolio",
  description: "AI & Data Science Student | Frontend Developer - Personal portfolio showcasing skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
