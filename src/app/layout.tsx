import Image from "next/image";
import "./globals.css";
import Link from "next/link";

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
      <body className="h-screen bg-zinc-950 bg-site-bg bg-cover bg-fixed bg-center bg-no-repeat text-sm text-zinc-200 md:text-base">
        <nav className="flex items-center justify-center py-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TierZero"
              width={200}
              height={200}
              className="rounded-full"
            />
          </Link>
        </nav>
        {children}
        <div className="text-center text-zinc-400">
          Copyright &copy; 2023 Tierzero Pro All Rights Reserved
        </div>
      </body>
    </html>
  );
}
