import { GetStaticPaths, GetStaticProps } from "next"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { stripe } from "@/src/lib/stipe"
import Stripe from "stripe"
import Image from "next/image"
import Head from "next/head"
import { useCart } from "@/src/hooks/useCart"
import { CartProduct } from "@/src/contexts/CartContext"

interface ProductProps {
  product: CartProduct;
}

export default function Product({ product }: ProductProps) {
  const { addProductToCart, ItemAlreadyInCart } = useCart();

  const ItemAlreadyExistsInCart = ItemAlreadyInCart(product.id)

  return (
    <>
    <Head>
      <title>{product.name} | Ignite Shop</title>
    </Head>
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt=""/>
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button disabled={ItemAlreadyExistsInCart} onClick={() => addProductToCart(product)}>
          {ItemAlreadyExistsInCart ? "Produto já foi adicionado no carrinho" : "Colocar na sacola"}
        </button>
      </ProductDetails>
    </ProductContainer>
  </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {  
    paths: [
      { params: { id: 'prod_NeYsKmE2w4dmgw' } }
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {   
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        numberPrice: price.unit_amount! / 100,
        description: product.description,
        defaultPrice: price.id,
      }
    }, 
    revalidate: 60 * 60 * 1
  }
}