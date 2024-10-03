import localFont from "next/font/local";
import "./stylesheets/globals.css";
import Head from "next/head"
import IconWhite from "./assets/images/UpendoIconWhite.png"
import IconBlack from "./assets/images/UpendoIconBlack.png"

const geistSans = localFont({
  src: "./assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Upendo",
  description: "Data made simple.",
  icon: {IconWhite},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href={IconBlack} rel="icon" media="(prefers-color-scheme: light)"/>
        <link href={IconWhite} rel="icon" media="(prefers-color-scheme: dark)"/>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
