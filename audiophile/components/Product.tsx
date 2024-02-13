import { Box, Container, Typography, Button as MuiButton } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Button from "./Button";
// import ProductCounter from "./ProductCounter";
import { addToCart, startNewCart } from "@/store/cartSlice";

interface props {
    product: any
}

export default function Product({ product }: props) {
    const [count, setCount] = useState(1);

    const { cart } = useAppSelector(state => state.cart);
    const dispatch = useDispatch()

    return (
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={product.image.desktop.replace(".", "")} width={500} height={500} alt="Product image" />
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '75vh', paddingTop: '6rem', width: '30vw', justifyContent: 'center', marginBottom: '3rem', marginLeft: '8rem' }}>
                {product.new && <Typography variant='h3' sx={{ textTransform: "uppercase", fontSize: '1.5rem', letterSpacing: '0.5rem', color: '#d97d45', marginBottom: '1rem' }}>New Product</Typography>}
                <Typography variant='h1' sx={{ fontWeight: 600, fontSize: '4.5rem', textTransform: "uppercase", marginBottom: '2rem' }}>{product.name}</Typography>
                <Typography sx={{ color: '#727272', fontSize: '1.25rem', marginBottom: '3rem' }}>
                    {product.description}
                </Typography>
                <Typography sx={{ marginBottom: "1.5rem", fontWeight: 700 }}>
                    ${product.price}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* <ProductCounter /> */}

                    <Box sx={{ backgroundColor: "#f1f1f1", padding: "0.2rem", marginRight: "0.5rem" }}>
                        <MuiButton onClick={() => {
                            if (count > 1)
                                setCount(count - 1)
                        }}>-</MuiButton>
                        {count}
                        <MuiButton onClick={() => setCount(count + 1)}>+</MuiButton>
                    </Box>

                    <Button variant="contained" color="#d97d45" onClick={() => { dispatch(startNewCart()); dispatch(addToCart({ id: product.id, name: product.name, price: product.price, count: count, image: product.image?.mobile.replace(".", "") })) }}>
                        Add to Cart
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
