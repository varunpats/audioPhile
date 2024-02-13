import CategoryCart from "@/components/CategoryCart";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { Box, Container } from '@mui/material'

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
      <Box sx={{ margin: "4rem 0 0" }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          {categories.map((category) => <CategoryCart category={category} />)}
        </Container>
      </Box>
    </div>
  );
}
