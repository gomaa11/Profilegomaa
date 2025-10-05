import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://gomaa.vercel.app"; // 👈 غيّرها حسب الدومين الحقيقي بتاعك

export const metadata = {
  title: "Eng : Gomaa Shaban",
  description: "Gomaa Shaban : Web and Android Applications Programmer",
  openGraph: {
    title: "Eng : Gomaa Shaban",
    description: "Gomaa Shaban : Web and Android Applications Programmer",
    url: "https://profilegomaa.vercel.app",
    type: "website",
    images: [
      {
        url: "https://profilegomaa.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eng : Gomaa Shaban",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eng : Gomaa Shaban",
    description: "Gomaa Shaban : Web and Android Applications Programmer",
    images: ["https://profilegomaa.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
