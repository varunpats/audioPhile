import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from './Button'

export default function Cart() {
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
                <Box>Products</Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Total</Typography>
                    <Typography>$$$</Typography>
                </Box>
                <Button variant="contained" color="#d97d45" sx={{ width: "100%", marginTop: "1rem" }}>Checkout</Button>
            </Box>
        </Box>
    )
}
