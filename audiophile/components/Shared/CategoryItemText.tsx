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
      {isNew && <Typography variant='h3' sx={{ textTransform: "uppercase", fontSize: '1.5rem', letterSpacing: '0.5rem', color: '#4f4f4f', marginBottom: '1rem' }}>New Product</Typography>}
      <Typography variant='h1' sx={{ fontWeight: 600, fontSize: '4.5rem', textTransform: "uppercase", marginBottom: '2rem' }}>{name}</Typography>
      <Typography sx={{ color: '#727272', fontSize: '1.25rem', marginBottom: '3rem' }}>{description}</Typography>
      <Button variant="contained" color="#d97d45">
        <Link href={`/${id}`} style={{ textDecoration: "none", color: "#fff" }}>
          See Product
        </Link>
      </Button>
    </Box>
  )
}
