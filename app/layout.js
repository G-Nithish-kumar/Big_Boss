import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bigg Boss 7 Telugu Voting Online Results Live ',
  description: 'Stay updated with the latest Bigg Boss 7 Telugu voting results live. Cast your vote and watch the drama unfold in real-time. Get all the inside scoop on your favorite reality show with our live updates and results tracking.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
