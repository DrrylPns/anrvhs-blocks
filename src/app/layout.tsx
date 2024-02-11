import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { MainNavbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/Theme-Providers";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLOCKS",
  description: "ANRVHS | BLOCKS | Bank of Learner's Official Collection in Knowledge System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <MainNavbar />
            {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
