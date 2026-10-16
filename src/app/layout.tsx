import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XENO — Beyond the Unknown",
  description:
    "XENO streetwear. Beyond the Unknown. Heavyweight hoodies and tees, made to order in Canada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
