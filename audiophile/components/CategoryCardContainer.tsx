import { Box, Container } from '@mui/material';
import CategoryCart from './CategoryCart';

export default function CategoryCardContainer() {
    const categories = ["Headphones", "Speakers", "Earphones"]

    return (
        <Box sx={{ margin: "4rem 0 0" }}>
            <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                {categories.map((category) => <CategoryCart key={category} category={category} />)}
            </Container>
        </Box>
    )
}
