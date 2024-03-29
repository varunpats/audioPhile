import { Box, Typography } from '@mui/material'
import Button from "./Button";
import Link from 'next/link';

function Hero() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '65vh', paddingTop: '6rem', width: '30vw', justifyContent: 'center', marginBottom: '3rem' }}>
            <Typography variant='h3' sx={{ textTransform: "uppercase", fontSize: '1.5rem', letterSpacing: '0.5rem', color: '#4f4f4f', marginBottom: '1rem' }}>New Product</Typography>
            <Typography variant='h1' sx={{ fontWeight: 600, fontSize: '4.5rem', textTransform: "uppercase", marginBottom: '2rem' }}>XX99 Mark II Headphones</Typography>
            <Typography sx={{ color: '#727272', fontSize: '1.25rem', marginBottom: '3rem' }}>Experience natural, lifelike audio and exceptional build quality made
                for the passionate music enthusiast.</Typography>
            <Button variant="contained" color="#d97d45">
                <Link href="/xx99-mark-two-headphones" style={{ textDecoration: "none", color: "#fff" }}>
                    See Product
                </Link>
            </Button>
        </Box>
    )
}

export default Hero