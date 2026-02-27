import type { Metadata } from "next";
import "./bootstrap.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Temporary Car Insurance | Short-Term & Day Cover | RAC",
  description: "Need short-term car insurance? Get cover from 1 hour to 30 days with RAC. Flexible, comprehensive cover for leisure or business use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowY: 'auto', height: 'auto' }}>
      <body style={{ overflowY: 'auto', height: 'auto', margin: 0 }}>{children}</body>
    </html>
  );
}
