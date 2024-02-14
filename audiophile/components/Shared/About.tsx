import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function About() {
    return (
        <Container>
            <Box sx={{ display: "flex", marginTop: "8rem" }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "13.9rem" }}>
                    <Typography variant="h4" sx={{ marginBottom: "1.5rem", fontWeight: 500, fontSize: "3rem", textTransform: "uppercase" }}>
                        Bring you the <span style={{ color: "#d87d4a", fontFamily: "roboto" }}>best</span> audio gear
                    </Typography>
                    <Typography sx={{ color: '#8d8d8d', fontSize: '1rem', marginBottom: '3.5rem' }}>
                        Located in the heart of New York City, Audiophile is the premiere
                        destination for high end headphones, earphones, speakers, and audio
                        accessories. We have a large showroom with luxury demonstration
                        rooms available for you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the fantastic people who
                        make Audiophile the best place to buy your portable audio equipment.
                    </Typography>
                </Box>
                <Image src="/assets/shared/desktop/image-best-gear.jpg" alt="about image" height={500} width={450} />
            </Box>
        </Container>
    )
}
