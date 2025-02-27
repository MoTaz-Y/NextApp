import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  //children are the content of the page
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <nav
          style={{
            width: "100vw",
            height: "64px",
            backgroundColor: "var(--gray-alpha-200)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link style={{ marginRight: "16px" }} href="/">
            Home
          </Link>
          <Link style={{ marginRight: "16px" }} href="/posts">
            Posts
          </Link>
          <Link style={{ marginRight: "16px" }} href="/articles">
            Articles
          </Link>
        </nav>
        {children}
        <footer
          style={{ textAlign: "center", padding: "50px", marginTop: "20px" }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
