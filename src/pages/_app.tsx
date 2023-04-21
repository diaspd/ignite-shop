import { useState } from 'react'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import { Header } from '../components/Header'
import { CartContextProvider } from '../contexts/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} /> 
      </Container>
    </CartContextProvider>
  )
}
