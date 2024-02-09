import MuiButton from '@mui/material/Button';

interface Props {
    color: string;
    variant: "text" | "contained" | "outlined";
}

export default function Button({ color, variant }: Props) {
    return (
        <MuiButton variant={variant} sx={{ backgroundColor: color, width: '10rem', padding: '0.5rem 1rem', borderRadius: 0, fontWeight: 800 }}>
            See Products
        </MuiButton>
    )
}
