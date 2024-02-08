import { Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

function Nav() {
  return (
    <Container sx={{ color: "#fff", padding: "2rem 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Image src="./assets/shared/desktop/logo.svg" alt="logo" height={30} width={150} />
      <ul style={{ textTransform: "uppercase", textDecoration: "none" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none", marginRight: "2rem", fontWeight: 700  }}>Home</Link>
        <Link href="/" style={{ color: "#fff", textDecoration: "none", marginRight: "2rem", fontWeight: 700  }}>Headphones</Link>
        <Link href="/" style={{ color: "#fff", textDecoration: "none", marginRight: "2rem", fontWeight: 700  }}>Speakers</Link>
        <Link href="/" style={{ color: "#fff", textDecoration: "none", marginRight: "2rem", fontWeight: 700  }}>Earphones</Link>
      </ul>
      <Image src="./assets/shared/desktop/icon-cart.svg" alt="cart" height={30} width={30} />
    </Container>
  )
}

export default Nav