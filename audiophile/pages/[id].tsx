import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Nav from '@/components/Nav'
import Product from '@/components/Product'

export default function product() {
    const router = useRouter();
    const { id } = router.query;

    const [data, setData] = useState([{ id: "0" }]);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({ id: "0" });

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
    </Box>
}
