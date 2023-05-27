import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "블뤠기의 만화방",
  description: "블뤡블뤡",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="luxury">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
