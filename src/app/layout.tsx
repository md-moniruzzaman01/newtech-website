import type { Metadata } from "next";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";

import "../shared/styles/globals.css";

export const metadata: Metadata = {
  title: "Newtech Technology",
  description: "Always There for you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="no-scrollbar">
        <header className="mb-20">
          <Header />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
