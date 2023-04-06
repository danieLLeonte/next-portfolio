import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
