import CategoryCardContainer from '@/components/CategoryCardContainer';
import Nav from '@/components/Nav';
import About from '@/components/Shared/About';
import CategoryPageHeader from '@/components/Shared/CategoryPageHeader';
import Footer from '@/components/Shared/Footer';
import { Container } from '@mui/material';
import React from 'react'

export default function headphones() {
    return (
        <>
            <div style={{ backgroundColor: "#1a1a1a" }}>
                <Container>
                    <Nav />
                </Container>
            </div>
            <CategoryPageHeader category='Headphones' />
            <CategoryCardContainer />
            <About />
            <Footer />
        </>
    );
}