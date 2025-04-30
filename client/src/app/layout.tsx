import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import DashbordWrapper from "./dashbordWrapper";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Project-Manager",
  description: "This is a project manager app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={inter.className}>
      <DashbordWrapper> {children}</DashbordWrapper>
     </body>
    </html>
  );
}
