import { Montserrat } from "@next/font/google";
import "./globals.css";

import Header from "./components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Daniel Leonte | Portfolio",
  description: "Daniel Leonte Portfolio",
  keywords:
    "web development, web design, javascript, react, node, nextjs, html, css, typescript, portfolio, portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-serif bg-secondary text-textSecondary`}
      >
        <Header />
        <main className="flex flex-col gap-24 lg:gap-0">
          {children}
        </main>
      </body>
    </html>
  );
}
