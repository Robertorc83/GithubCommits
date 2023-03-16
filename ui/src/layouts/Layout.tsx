import Header from '../components/Header'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

export default function Layout({ children }:Props) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}
