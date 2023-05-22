import Image from "next/image";
import "./globals.css";

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
      <body className="h-screen bg-zinc-950 bg-site-bg bg-cover bg-fixed bg-center bg-no-repeat text-zinc-200">
        <nav className="bg-red flex items-center justify-center py-4">
          <Image
            src="/logo.png"
            alt="TierZero"
            width={200}
            height={200}
            className="rounded-full"
          />
        </nav>
        {children}
        <div className="text-center text-zinc-400">
          Copyright &copy; 2023 Tierzero Pro All Rights Reserved
        </div>
      </body>
    </html>
  );
}
