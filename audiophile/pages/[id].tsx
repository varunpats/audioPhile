import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Nav from '@/components/Nav'
import Product from '@/components/Product'
import About from '@/components/Shared/About';
import Footer from '@/components/Shared/Footer';
import CategoryCardContainer from '@/components/CategoryCardContainer';
import ProductFeatures from '@/components/Shared/ProductFeatures';
import ProductGallery from '@/components/Shared/ProductGallery';
import Reccomendations from '@/components/Shared/Reccomendations';

export default function product() {
    const router = useRouter();
    const { id } = router.query;

    const [data, setData] = useState([{ id: "0" }]);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({
        id: "0",
        features: "",
        accessories: [],
        gallery: {
            first: { desktop: "" },
            second: { desktop: "" },
            third: { desktop: "" }
        },
        others: []
    });

    useEffect(() => {
        fetch("/api/hello")
            .then(res => res.json())
            .then((res) => {
                setData(res)
                setIsLoading(false)
                res.map((item: any) => {
                    if (item.id.toString() === id) {
                        setProduct(item)
                    }
                })
            })
    }, [id])

    if (isLoading) {
        return <Box>
            <Nav />
            <p>Loading...</p>
        </Box>
    }

    return <Box>
        <Nav />
        <Product product={product} />
        <ProductFeatures features={product.features} accessories={product.includes} gallery={product.gallery} />
        <CategoryCardContainer />
        <ProductGallery gallery={product.gallery} />
        <Reccomendations recommendations={product.others} />
        <About />
        <Footer />
    </Box>
}
