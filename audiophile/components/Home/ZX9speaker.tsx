import Button from "@/components/Button";
import { Box, Container, Typography } from '@mui/material';
import Image from "next/image";
import Link from "next/link";

export default function ZX9speaker() {
    return (
        <Container sx={{ marginBottom: "4rem" }}>
            <Box sx={{
                backgroundColor: "#d87d4a", color: "#fff", display: "flex", alignItems: "center", backgroundImage: "url(/assets/home/desktop/pattern-circles.svg)", backgroundRepeat: "no-repeat"
            }}>
                <Box sx={{ margin: "4rem 8rem 0 8rem" }}>
                    <Image src={'/assets/home/desktop/image-speaker-zx9.png'} width={400} height={500} alt="zx9-speaker" />
                </Box>
                <Box sx={{ marginRight: "10rem" }}>
                    <Typography variant='h2' sx={{ fontWeight: 600, fontSize: '4.5rem', textTransform: "uppercase", marginBottom: '2rem' }}>ZX9 Speaker</Typography>
                    <Typography sx={{ fontSize: '1.25rem', marginBottom: '3rem' }}>Upgrade to premium speakers that are phonomenally built to deliver truly remarkable sound.</Typography>
                    <Button variant="contained" color="#000">
                        <Link href="/zx9-speaker" style={{ textDecoration: "none", color: "#fff" }} >
                            SEE PRODUCTS
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
