import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';

export default function YX1earphones() {
    return (
        <Container sx={{ marginTop: "4rem" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Image src="/assets/home/desktop/image-earphones-yx1.jpg" alt="Earphone" width={720} height={320} />
                <Box sx={{ backgroundColor: "#f1f1f1", width: "50%", marginLeft: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "6.5rem" }}>
                    <Typography variant="h4" sx={{ marginBottom: "1rem", fontWeight: 500 }}>YX1 Earphone</Typography>
                    <Button variant="outlined" color="#000">
                        <Link href="/yx1-earphones" style={{ textDecoration: "none" }} >
                            SEE PRODUCTS
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
