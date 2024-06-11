import { Raleway } from "next/font/google";
import Head from "next/head";
import "./main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "M.P Green Teens",
  description: "Transforming lawns into stunning outdoor spaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZCTZLBMW1X"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZCTZLBMW1X');
            `,
          }}
        />
      </Head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
