import CategoryCardContainer from '@/components/CategoryCardContainer';
import Nav from '@/components/Nav';
import About from '@/components/Shared/About';
import CategoryItemImage from '@/components/Shared/CategoryItemImage';
import CategoryItemText from '@/components/Shared/CategoryItemText';
import CategoryPageHeader from '@/components/Shared/CategoryPageHeader';
import Footer from '@/components/Shared/Footer';
import { APIProduct } from '@/types';
import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function headphones() {
    const category = "headphones"
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<APIProduct[]>([]);

    useEffect(() => {
        fetch("/api/hello")
            .then(res => res.json())
            .then((res) => {
                setIsLoading(false)
                res.map((item: APIProduct) => {
                    if (item.category === category) {
                        data.unshift(item)
                    }
                })
            })
    }, [data])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div style={{ backgroundColor: "#1a1a1a" }}>
                <Container>
                    <Nav />
                </Container>
            </div>
            <CategoryPageHeader category={category} />
            {data.map((item: any, index: number) => {
                return (
                    <Container>
                        <Box key={item.id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: index % 2 == 1 ? "row-reverse" : "row", margin: "5rem 0" }}>
                            <CategoryItemImage src={item.image.desktop.replace(".", "")} name={item.name} />
                            <CategoryItemText isNew={item.new} name={item.name} description={item.description} slug={item.slug} />
                        </Box>
                    </Container >
                )
            })}
            <CategoryCardContainer />
            <About />
            <Footer />
        </>
    );
}