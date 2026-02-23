import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskFlow Dashboard",
  description: "Manage your tasks effortlessly",
};
import QueryProvider from "@/providers/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-[#FAFAFA] dark:bg-black`}
      >
        <Sidebar />
        <main className="flex-1 w-full md:ml-[260px]">
          <QueryProvider>
            {children}
          </QueryProvider>
        </main>
      </body>
    </html>
  );
}
