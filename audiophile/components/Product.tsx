import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Button from "./Button";
import ProductCounter from "./ProductCounter";
import { useAppSelector } from "@/store/hooks";
import { selectCart } from "@/store/cartSlice";

interface props {
    product: any
}

export default function Product({ product }: props) {
    const { cart } = useAppSelector(state => state.cart);

    return (
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={product.image?.desktop.replace(".", "")} width={500} height={500} alt="Product image" />
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '75vh', paddingTop: '6rem', width: '30vw', justifyContent: 'center', marginBottom: '3rem', marginLeft: '8rem' }}>
                {product.new && <Typography variant='h3' sx={{ textTransform: "uppercase", fontSize: '1.5rem', letterSpacing: '0.5rem', color: '#d97d45', marginBottom: '1rem' }}>New Product</Typography>}
                <Typography variant='h1' sx={{ fontWeight: 600, fontSize: '4.5rem', textTransform: "uppercase", marginBottom: '2rem' }}>{product.name}</Typography>
                <Typography sx={{ color: '#727272', fontSize: '1.25rem', marginBottom: '3rem' }}>
                    {product.description}
                </Typography>
                <Typography>
                    {product.price}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ProductCounter />
                    <Button variant="contained" color="#d97d45">Add to Cart</Button>
                </Box>
            </Box>
        </Container>
    )
}
