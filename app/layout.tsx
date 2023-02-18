import './globals.scss'
import { Inter } from '@next/font/google';
import { Header } from '@/components';
import { createGlobalStyle } from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';


const inter = Inter({ subsets: ['latin'] })

// const GlobalStyles = createGlobalStyle`
//   :root {

//   }
// `

interface IRootLayout {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
