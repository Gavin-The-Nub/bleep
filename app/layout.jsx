import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sleepless Coin - The Most Insomniac Token",
  description: "The only crypto fueled by insomnia, anxiety, and questionable decisions. Zero rest. 100% delusion.",
  keywords: "sleepless, coin, crypto, meme, token, insomnia, solana",
  openGraph: {
    title: "Sleepless Coin - The Most Insomniac Token",
    description: "The only crypto fueled by insomnia, anxiety, and questionable decisions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleepless Coin - The Most Insomniac Token",
    description: "The only crypto fueled by insomnia, anxiety, and questionable decisions.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
