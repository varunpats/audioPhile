import { Box, Container, Typography } from "@mui/material";
import Button from "../Button";
import Link from "next/link";

export default function ZX7speaker() {
    return (
        <Container>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", backgroundImage: "url(/assets/home/desktop/image-speaker-zx7.jpg)", padding: "0 4rem", height: "20rem", backgroundRepeat: "no-repeat", WebkitBackgroundSize: "cover" }}>
                <Typography variant="h4" sx={{ marginBottom: "1rem", fontWeight: 500 }}>ZX7 Speaker</Typography>
                <Button variant="outlined" color="null">
                    <Link href="/5" style={{ textDecoration: "none", color: "#1976d2" }} >
                        SEE PRODUCTS
                    </Link>
                </Button>
            </Box>
        </Container>
    )
}
