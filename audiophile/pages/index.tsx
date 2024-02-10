import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { Container } from '@mui/material'

export default function Home() {
  return (
    <div style={{
      backgroundImage: "url(./assets/home/desktop/image-hero.jpg)",
      height: "100vh",
      backgroundSize: "95%",
      color: "#fff"
    }}>
      <Container >
        <Nav />
        <hr />
        <Hero />
      </Container>
    </div>
  );
}
