import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waltevery",
  description: "Lovevery Frontend Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-dvh flex-col`}>
        <Providers>
          <Navbar className="bg-neutral-50 px-5 dark:bg-neutral-900 tablet:px-20" />
          <main className="flex-1 dark:bg-neutral-800">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
