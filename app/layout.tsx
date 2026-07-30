import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content transfer",
  description:
    "Securely transfer content between environments using the content and item transfer APIs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
