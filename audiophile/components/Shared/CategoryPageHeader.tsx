import { Box, Typography } from '@mui/material';

interface Props {
    category: string
}

export default function CategoryPageHeader({ category }: Props) {
    return (
        <Box sx={{ backgroundColor: "#1a1a1a", color: "#fff", minHeight: "13rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant='h1' sx={{textTransform: "uppercase", fontSize: "2.25rem", fontWeight: "800"}}>
                {category}
            </Typography>
        </Box>
    )
}
