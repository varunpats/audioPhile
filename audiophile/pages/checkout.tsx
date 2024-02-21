import Checkout from "@/components/Checkout";
import Nav from "@/components/Nav";
import PaymentDetails from "@/components/PaymentDetails";
import Footer from "@/components/Shared/Footer";
import Summary from "@/components/Summary";
import { Box, Container } from "@mui/material";

export default function Chceckout() {
    const categories = ["Headphones", "Speakers", "Earphones"]
    return (
        <div style={{ backgroundColor: "#f1f1f1" }}>
            <Nav />
            <Container>
                <Box sx={{ display: "flex" }}>
                    <PaymentDetails />
                    <Summary />
                </Box>
            </Container>
            <Footer />
        </div>
    );
}
