import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
    category: string;
}

export default function CategoryCart({ category }: Props) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "25%" }}>
            <Image
                src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
                width={250}
                height={225}
                alt={category}
            />
            <Typography variant="h4" sx={{ textTransform: "uppercase", fontSize: "1.5rem" }}>{category}</Typography>
            <Link href={`/${category.toLowerCase()}`} style={{ color: "#8f8f8f", textDecoration: "none", textTransform: "uppercase" }}>Shop</Link>
            <Box
                sx={{
                    backgroundColor: "#f1f1f1",
                    width: "100%",
                    height: "200px",
                    position: "relative",
                    bottom: "150px",
                    zIndex: "-1",
                }}
            ></Box>
        </Box >
    )
}
