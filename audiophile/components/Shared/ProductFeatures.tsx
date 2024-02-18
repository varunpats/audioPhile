import { Box, Container, Typography } from "@mui/material";

interface accessories {
    quantity: number;
    item: string;
}

interface Props {
    features: string;
    accessories: accessories[];
}

export default function ProductFeatures({ features, accessories }: Props) {
    return (
        <Container>
            <Box sx={{ display: "flex", margin: "4rem 0" }}>
                <Box sx={{ width: "65%" }}>
                    <Typography variant="h3" sx={{ textTransform: "uppercase", fontSize: "1.5rem", fontWeight: "500", marginBottom: "2rem" }}>Features</Typography>
                    <Typography>{features}</Typography>
                </Box>
                <Box sx={{ marginLeft: "2rem" }}>
                    <Typography variant="h3" sx={{ textTransform: "uppercase", fontSize: "1.5rem", fontWeight: "500", marginBottom: "2rem" }}>In the Box</Typography>
                    {accessories.map((item) => {
                        return <Typography key={item.item}>
                            <span style={{ color: "#d87d4a", marginRight: "0.5rem" }}>{item.quantity}X</span> {item.item}
                        </Typography>
                    })}
                </Box>
            </Box>
        </Container>
    )
}
