import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import logo from "../../public/logo.png";

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
        <nav className="flex items-center justify-center py-4">
          <Link href="/" className="inline-flex flex-col items-center">
            <Image src={logo} alt="TierZero" priority width={200} />
            <span className="text-xs font-bold">Beta 1.3.0</span>
          </Link>
        </nav>

        <div className="flex-1">{children}</div>
        <div className="mt-32 py-6 text-center text-zinc-400">
          Copyright &copy; 2023 Tierzero Pro All Rights Reserved
        </div>
      </body>
    </html>
  );
}
