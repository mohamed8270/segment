import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Segment",
  description: "Store your potential medical data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
