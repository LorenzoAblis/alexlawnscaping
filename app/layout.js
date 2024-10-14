import { Raleway } from "next/font/google";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title:
    "M.P Green Teens | Fall Cleanup & Lawnscaping Services in Mount Prospect, Illinois",
  description: "Transforming lawns into stunning outdoor spaces",
  keywords:
    "fall cleanup, leaf removal, yard cleanup, lawn care, Illinois lawnscaping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
      </Head>
      <body className={raleway.className}>{children}</body>
      <GoogleAnalytics gaId="G-ZCTZLBMW1X" />
    </html>
  );
}
