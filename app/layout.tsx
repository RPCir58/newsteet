import type { Metadata } from 'next'
import { Open_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-open-sans'
});
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'New Steet | Streetwear Brand',
  description: 'New Steet - Marca de ropa urbana con diseños exclusivos. Descubre nuestra colección de camisetas y sudaderas.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
