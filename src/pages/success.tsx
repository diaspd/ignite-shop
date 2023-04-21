import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stipe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SucsessProps {
  customerName: string;
  products: string[];
}

export default function Success({customerName, products}: SucsessProps) {
  return (
    <>
    <Head>
      <title>Compra efetuada | Ignite Shop</title>

      <meta name="robots" content="noindex"/>
    </Head> 
    <SuccessContainer>

      <div> 
        {products.map(product => (
          <ImageContainer  key={product}>
            <Image src={product} width={120} height={110} alt=""/>
          </ImageContainer>
        ))}    
      </div>

      <h1>Compra efetuada!</h1>

      <p>
        uhull <strong>{customerName}</strong>, sua compra de {products.length} camiseta(s) já está a caminho.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
    
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const products = session.line_items?.data.map(item => {
    const product = item.price?.product as Stripe.Product;
    return product.images[0];
  })
  
  return {
    props: {
      customerName, 
      products
    }
  }
}