import './globals.scss'
import { Inter } from '@next/font/google';
import { Nav } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
