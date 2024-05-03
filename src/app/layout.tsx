import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Card",
  description: "blog card challenge by frontend mentor",
};

const Figtree = localFont({
  src: './../../public/assets/fonts/Figtree-VariableFont_wght.ttf',
  variable: '--font-Fig'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${Figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
