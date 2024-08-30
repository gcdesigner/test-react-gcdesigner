import { Header } from "@/components/shell/Header";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WebMovies",
  description: "Encontre e se diverte com seus séries e filmes favoritos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "grid grid-rows-[88px_1fr] bg-[#2F2E41] pb-10",
          fontSans.className,
        )}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
