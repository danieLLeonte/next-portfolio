import { Montserrat } from "@next/font/google";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
