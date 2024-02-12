import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { useAppSelector } from '@/store/hooks'

export default function Cart() {
    const { cart } = useAppSelector((state) => state.cart)

    return (
        <Box sx={{ position: "absolute", top: 106, height: "100vh", width: "98.9vw", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <Box sx={{
                position: "absolute",
                top: 15,
                right: 200,
                padding: "1.5rem",
                minHeight: "20vh",
                width: "20vw",
                color: "#000",
                backgroundColor: "#fff",
                textTransform: "uppercase"
            }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Cart</Typography>
                    <Typography>Remove All</Typography>
                </Box>
                {cart.map(product => {
                    return (<Box key={product.id} sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex" }}>
                            <Image
                                src={product.image}
                                width={50}
                                height={50}
                                alt=""
                            />
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant='body1'>{product.name}</Typography>
                                <Typography variant='body2' sx={{ color: "#6f7275" }}>{product.price}</Typography>
                            </Box>
                        </Box>
                        {product.count}
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
