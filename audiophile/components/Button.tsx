import MuiButton from '@mui/material/Button';

interface Props {
    color: string;
    variant: "text" | "contained" | "outlined";
    children: string;
    sx?: any
}

export default function Button({ color, variant, children, sx }: Props) {
    return (
        <MuiButton variant={variant} sx={{ backgroundColor: color, width: '10rem', padding: '0.5rem 1rem', borderRadius: 0, fontWeight: 800, ...sx }}>
            {children}
        </MuiButton>
    )
}
