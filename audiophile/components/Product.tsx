import { Box } from "@mui/material";
import Image from "next/image";

export default function Product() {
    return (
        <Box sx={{ display: "flex" }}>
            <Image src={"/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"} width={500} height={500} alt="" />
        </Box>
    )
}
