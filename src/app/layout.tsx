import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WinstonECommerce",
  description:
    "Browse through our carefully selected range of apparel, from sleek streetwear to elegant evening wear, designed to make you stand out in any crowd. Explore our curated selection of accessories, including statement jewelry, stylish handbags, and on-trend footwear, to add that perfect finishing touch to your ensemble.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // min-w-[300px] sets the min width to be 300 pixels. It doesn't restrict it from
    // going smaller, it just prevents the page from changing past 300 pixels.
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
