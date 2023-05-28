import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "TierZero",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col bg-zinc-950 bg-site-bg bg-cover bg-fixed bg-center bg-no-repeat text-sm text-zinc-200 md:text-base">
        <Navbar />

        <div className="flex-1">{children}</div>
        <div className="mt-32 py-6 text-center text-zinc-400">
          Copyright &copy; 2023 Tierzero Pro All Rights Reserved
        </div>
      </body>
    </html>
  );
}
