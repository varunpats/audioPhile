import { Box, Typography } from "@mui/material";
import Button from "../Button";
import Link from "next/link";

interface Props {
  isNew: boolean;
  name: string;
  description: string;
  id: string | number;
}

export default function CategoryItemText({ isNew, name, description, id }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '65vh', paddingTop: '6rem', width: '30vw', justifyContent: 'center', marginBottom: '3rem' }}>
      {isNew && <Typography variant='h3' sx={{ textTransform: "uppercase", fontSize: '1rem', fontWeight: 600, letterSpacing: '1.5rem', color: '#d87d4a', marginBottom: '1rem' }}>New Product</Typography>}
      <Typography variant='h1' sx={{ fontWeight: 500, fontSize: '3.5rem', textTransform: "uppercase", marginBottom: '2rem' }}>{name}</Typography>
      <Typography sx={{ fontSize: '1.25rem', marginBottom: '3rem' }}>{description}</Typography>
      <Button variant="contained" color="#d97d45">
        <Link href={`/${id}`} style={{ textDecoration: "none", color: "#fff" }}>
          See Product
        </Link>
      </Button>
    </Box>
  )
}
