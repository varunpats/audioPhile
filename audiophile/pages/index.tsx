import CategoryCardContainer from "@/components/CategoryCardContainer";
import Hero from "@/components/Hero";
import YX1earphones from "@/components/Home/YX1earphones";
import ZX7speaker from "@/components/Home/ZX7speaker";
import ZX9speaker from "@/components/Home/ZX9speaker";
import Nav from "@/components/Nav";
import About from "@/components/Shared/About";
import { Container } from '@mui/material';

export default function Home() {
  const categories = ["Headphones", "Speakers", "Earphones"]
  return (
    <div>
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
      <CategoryCardContainer />
      <ZX9speaker />
      <ZX7speaker />
      <YX1earphones />
      <About />
    </div>
  );
}
