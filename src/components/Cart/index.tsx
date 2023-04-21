import Image from 'next/image';

import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { X, Handbag } from 'phosphor-react'

import { Footer, HeaderButton, Icon, ProductInfo, ShopContent, ShopSection, ImageContainer } from './styles';
import { useCart } from '@/src/hooks/useCart';
import { CartProduct } from '@/src/contexts/CartContext';

export function Cart() {
  const { cartItems, removeProductFromCart, cartTotalItems } = useCart()

  const cartProductsQuantity = cartItems.length;
    
  const formattedTotal = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotalItems)

  async function handleBuyProduct() {
    try {
      const response = await axios.post('/api/checkout', {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      alert("Falha ao redirecionar")
    }
  }
 
  return (
    <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderButton>
              <Handbag weight='bold' size={24} />
            </HeaderButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
    <ShopSection>

      <ShopContent>            
          <Dialog.Close asChild>
              <Icon>
                <X weight='bold' size={24} tabIndex={0}/>
              </Icon>
          </Dialog.Close>     
              <h2>Sacola de compras</h2>
              <main> 
                {cartItems.map((cartItem: CartProduct) => (
                  <div key={cartItem.id}>
                <section>
                  <ImageContainer>
                    <Image width={120} height={110} src={cartItem.imageUrl} alt="" />
                  </ImageContainer>
                  <ProductInfo>
                    <p>{cartItem.name}</p>
                    <span>R$ {cartItem.price}</span>
                    <button onClick={() => removeProductFromCart(cartItem.id)}>Remover</button>
                  </ProductInfo>
                  </section>
                </div>
                ))}
              </main>

              <Footer>
                <div>
                  <span>Quantidade</span>
                  <span>{cartProductsQuantity} item(ns)</span>
                </div>
                <div>
                  <strong>Valor total</strong> <strong>{formattedTotal}</strong>
                </div>
                
                <button onClick={handleBuyProduct} disabled={cartProductsQuantity <= 0}>Finalizar Compra</button>
              </Footer>

            </ShopContent>
          </ShopSection>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}