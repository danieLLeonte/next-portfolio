import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
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
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
