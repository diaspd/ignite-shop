import { useEffect, useState } from 'react';
import { GetStaticProps } from "next";
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";

import { Description, HomeContainer, Product, SkeletonHome } from "../styles/pages/home";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Stripe from "stripe";
import { stripe } from "../lib/stipe";

import { Handbag } from "phosphor-react";

import { useCart } from '../hooks/useCart';
import { CartProduct } from '../contexts/CartContext';
import { Skeleton } from '../components/Skeleton';

interface HomeProps {
  products: CartProduct[]
}

export default function Home({ products }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }, 
    breakpoints: {
      '(max-width: 500px)': {
        vertical: true,
      },
    },
  })
  
  useEffect(() => {
      setTimeout(() => setIsLoading(false), 2000);
  }, [])
 
  const { addProductToCart, ItemAlreadyInCart } = useCart()
  
  function handleAddProductToCart(event: React.MouseEvent<HTMLElement>, product: CartProduct) {
    event.preventDefault();
    addProductToCart(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      
        {isLoading ? (
          <SkeletonHome>
            <Skeleton />
          </SkeletonHome>
        ) : 
        <HomeContainer ref={sliderRef} className="keen-slider">
          {products.map(product => {
            return(
            <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
              <footer>
                <Description>
                  <strong>{product.name}</strong>
                  <p>{product.price}</p>
                </Description>
                <button  
                  onClick={(event) => handleAddProductToCart(event, product)}
                  disabled={ItemAlreadyInCart(product.id)}
                >                
                  <Handbag weight='bold' size={32} color="white"/>
                </button>
              </footer>
              </Product>
            </Link>
          )
         })}    
         </HomeContainer>
        }
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      numberPrice: price.unit_amount! / 100,
      defaultPrice: price.id,
    }
  })

  return { 
    props: {
      products
    }
  }
}
