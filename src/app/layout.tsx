import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe Coding Olympics",
  description: "The ultimate competition for vibe coders worldwide",
  openGraph: {
    title: "Vibe Coding Olympics",
    description: "The ultimate competition for vibe coders worldwide",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "Vibe Coding Olympics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vibe Coding Olympics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding Olympics",
    description: "The ultimate competition for vibe coders worldwide",
    images: ["/og-image.jpg"],
  },
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";

export const metadata: Metadata = {
  title: "Vibe Coding Olympics",
  description: "The most aesthetic coding competition on Earth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className="min-h-screen font-sans">
          <QueryProvider>{children}</QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
