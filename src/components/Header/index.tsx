import Link from 'next/link'
import Image from 'next/image'

import logoImg from '../../assets/logo.svg'
import { HeaderContent } from './styles'

import { Cart } from '../Cart';
import { useRouter } from 'next/router';

export function Header() {
  const { pathname } = useRouter()

  const isCartVisible = pathname !== '/success'

  return (
    <HeaderContent>
        <Link href={'/'}>
          <Image src={logoImg.src} alt="logo" width={130} height={52} />
        </Link>
        {isCartVisible && <Cart />}
    </HeaderContent>
  )
}