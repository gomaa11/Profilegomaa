import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Eng : Gomaa Shaban",
  description: "Gomaa Shaban : Web and Android Applications Programmer",
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.ico", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      {
        url: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Eng : Gomaa Shaban",
    description: "Gomaa Shaban : Web and Android Applications Programmer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eng : Gomaa Shaban",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eng : Gomaa Shaban",
    description: "Gomaa Shaban : Web and Android Applications Programmer",
    images: ["/images/certificate2.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
