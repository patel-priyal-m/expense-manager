import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"  ;
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expense Manager",
  description: "Manage your expenses efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* {header} */}
        <Header></Header>
        <main className="min-h-screen">
          {children}
        </main>
        {/* {footer} */}
        <footer className="bg-blue-500 py-12">
          <div className="container mx-auto px-4 text-center text-white ">
            <p>created by Priyal Patel</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
