import { Box, Typography } from '@mui/material'
import React from 'react'

function Hero() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '50vh', paddingTop: '6rem', width: '30vw', justifyContent: 'center', marginBottom: '3rem' }}>
            <Typography variant='h3' sx={{ textTransform: "uppercase", fontSize: '1.5rem', letterSpacing: '0.5rem', color: '#4f4f4f', marginBottom: '1rem' }}>New Product</Typography>
            <Typography variant='h1' sx={{ fontWeight: 600, fontSize: '4.5rem', textTransform: "uppercase", marginBottom: '2rem' }}>XX99 Mark II Headphones</Typography>
            <Typography sx={{ color: '#727272', fontSize: '1.25rem' }}>Experience natural, lifelike audio and exceptional build quality made
                for the passionate music enthusiast.</Typography>
        </Box>
    )
}

export default Hero