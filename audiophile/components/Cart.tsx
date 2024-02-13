import { Box, Typography, Button as MuiButton } from '@mui/material'
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { clearCart } from '@/store/cartSlice'

export default function Cart() {
    const { cart } = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch();

    return (
        <Box sx={{ position: "absolute", top: 106, height: "100vh", width: "98.9vw", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <Box sx={{
                position: "absolute",
                top: 15,
                right: 200,
                padding: "1.5rem",
                minHeight: "20vh",
                width: "23vw",
                color: "#000",
                backgroundColor: "#fff",
                textTransform: "uppercase"
            }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Cart</Typography>
                    <MuiButton onClick={() => dispatch(clearCart())}>Remove All</MuiButton>
                </Box>
                {cart.map(product => {
                    return (<Box key={product.id} sx={{ display: "flex", margin: "1rem 0", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex" }}>
                            <Image
                                src={product.image}
                                width={50}
                                height={50}
                                alt=""
                            />
                            <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "1rem" }}>
                                <Typography variant='body1'>{product.name}</Typography>
                                <Typography variant='body2' sx={{ color: "#6f7275" }}>{product.price}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                            <Typography sx={{ fontSize: "0.75rem" }}>Count</Typography>
                            <Typography variant="body1" sx={{ marginLeft: "1rem", fontWeight: 800 }}>
                                {product.count}
                            </Typography>
                        </Box>
                    </Box>)
                })}

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Total</Typography>
                    <Typography>$$$</Typography>
                </Box>
                <Button variant="contained" color="#d97d45" sx={{ width: "100%", marginTop: "1rem" }}>Checkout</Button>
            </Box>
        </Box>
    )
}
