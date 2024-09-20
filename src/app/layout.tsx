import { Inter } from 'next/font/google'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 pb-8">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}