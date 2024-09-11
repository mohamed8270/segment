import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";


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
      <body className="bg-swhite">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
