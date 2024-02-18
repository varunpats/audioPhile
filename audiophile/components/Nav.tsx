import { Button, Container, Typography } from '@mui/material'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Cart from './Cart';
import { useAppSelector } from '@/store/hooks';

function Nav() {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useAppSelector(state => state.cart)

  return (
    <div style={{ color: "#fff", padding: "2rem 0", backgroundColor: "#191919" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/"><Image src="./assets/shared/desktop/logo.svg" alt="logo" height={30} width={150} /></Link>
        <ul style={{ textTransform: "uppercase", textDecoration: "none" }}>
          <Link href="/" style={{ color: "#fff", textDecoration: "none", marginRight: "2rem", fontWeight: 700 }}>Home</Link>
          <Link href="/headphones" style={{ color: "#fff", textDecoration: "none", marginRight: "2rem", fontWeight: 700 }}>Headphones</Link>
          <Link href="/speakers" style={{ color: "#fff", textDecoration: "none", marginRight: "2rem", fontWeight: 700 }}>Speakers</Link>
          <Link href="/earphones" style={{ color: "#fff", textDecoration: "none", marginRight: "2rem", fontWeight: 700 }}>Earphones</Link>
        </ul>
        <Button onClick={() => setShowCart(!showCart)}>
          <Image src="./assets/shared/desktop/icon-cart.svg" alt="cart" height={30} width={30} />
          <Typography sx={{ marginLeft: "0.5rem", color: "#fff" }}>({cart.length})</Typography>
        </Button>
      </Container>
      {showCart && <Cart />}
    </div>
  )
}

export default Nav