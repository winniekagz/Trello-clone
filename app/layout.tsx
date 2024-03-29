import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Trello 2.0 clone",
  description: "Generated by winniekagz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f5f6f8">{children}</body>
    </html>
  );
}
