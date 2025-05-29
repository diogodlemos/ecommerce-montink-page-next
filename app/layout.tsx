import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "E-commerce Montink",
  description: "E-commerce simples com React e Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <body
        className="font-poppins bg-blue-950 text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300"
      >
        {children}
      </body>
    </html>
  );
}
