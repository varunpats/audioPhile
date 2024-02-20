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
import { APIProduct } from '@/types';

export default function product() {
    const router = useRouter();
    const { slug } = router.query;

    const [data, setData] = useState([{ id: "0" }]);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState<APIProduct>({
        id: 0,
        slug: "",
        name: "",
        image: {
            mobile: "",
            tablet: "",
            desktop: "",
        },
        category: "",
        new: true,
        price: 0,
        description: "",
        features: "",
        includes: [
            {
                quantity: 0,
                item: "",
            },
            {
                quantity: 0,
                item: "",
            },
            {
                quantity: 0,
                item: "",
            },
            {
                quantity: 0,
                item: "",
            },
            {
                quantity: 0,
                item: "",
            },
        ],
        gallery: {
            first: {
                mobile: "",
                tablet: "",
                desktop: "",
            },
            second: {
                mobile: "",
                tablet: "",
                desktop: "",
            },
            third: {
                mobile: "",
                tablet: "",
                desktop: "",
            },
        },
        others: [
            {
                slug: "",
                name: "",
                image: {
                    mobile: "",
                    tablet: "",
                    desktop: "",
                },
            },
            {
                slug: "",
                name: "",
                image: {
                    mobile: "",
                    tablet: "",
                    desktop: "",
                },
            },
            {
                slug: "",
                name: "",
                image: {
                    mobile: "",
                    tablet: "",
                    desktop: "",
                },
            },
        ],
    });

    useEffect(() => {
        fetch("/api/hello")
            .then(res => res.json())
            .then((res) => {
                setData(res)
                setIsLoading(false)
                res.map((item: any) => {
                    if (item.slug === slug) {
                        setProduct(item)
                    }
                })
            })
    }, [slug])

    if (isLoading) {
        return <Box>
            <Nav />
            <p>Loading...</p>
        </Box>
    }

    return <Box>
        <Nav />
        <Product product={product} />
        <ProductFeatures features={product.features} accessories={product.includes} />
        <CategoryCardContainer />
        <ProductGallery gallery={product.gallery} />
        <Reccomendations recommendations={product.others} />
        <About />
        <Footer />
    </Box>
}
