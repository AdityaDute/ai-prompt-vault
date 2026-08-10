import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import { ToastProvider } from "@/components/ToastProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-prompt-vault.vercel.app"),
  title: {
    default: "AI Prompt Vault",
    template: "%s | AI Prompt Vault",
  },
  description: "A focused collection of useful AI prompts for creators, developers, and strategists.",
  openGraph: {
    title: "AI Prompt Vault",
    description: "Curated AI prompts for better work, faster.",
    siteName: "AI Prompt Vault",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ToastProvider>
      </body>
    </html>
  );
}
