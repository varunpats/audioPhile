import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Button from "../Button";

interface Props {
    recommendations: any[]
}

export default function Reccomendations({ recommendations }: Props) {
    return (
        <Container>
            <Box>
                <Typography variant="h3" sx={{
                    textTransform: "uppercase",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    margin: "5rem 0",
                    textAlign: "center"
                }}>
                    You may also like
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    {recommendations.map((product) => {
                        return (
                            <Box key={product.slug} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Image src={product.image.desktop.replace(".", "")} alt={product.name} width={350} height={350} />
                                <Typography variant="h3" sx={{
                                    textTransform: "uppercase",
                                    fontSize: "1.5rem",
                                    fontWeight: "500",
                                    margin: "2rem 0"
                                }}>
                                    {product.name}
                                </Typography>
                                <Button variant="contained" color="#d87d4a">
                                    See Product
                                </Button>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Container>
    )
}
