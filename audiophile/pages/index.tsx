import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div style={{
      backgroundImage: "url(./assets/home/desktop/image-hero.jpg)",
      height: "100vh",
      backgroundSize: "90%"
    }}>
      <Nav />
    </div>
  );
}
