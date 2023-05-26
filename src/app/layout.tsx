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
        <nav className=" mx-auto flex w-full max-w-5xl items-center  justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="inline-flex flex-col items-center">
            <Image src={logo} alt="TierZero" priority width={200} />
            <span className="text-xs font-bold">Beta 1.3.0</span>
          </Link>
          <a
            href="#"
            className="flex gap-x-2 rounded bg-primary px-4 py-2 text-sm font-medium text-zinc-50"
          >
            Login With Steam
          </a>
        </nav>

        <div className="flex-1">{children}</div>
        <div className="mt-32 py-6 text-center text-zinc-400">
          Copyright &copy; 2023 Tierzero Pro All Rights Reserved
        </div>
      </body>
    </html>
  );
}
