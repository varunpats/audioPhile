import MuiButton from '@mui/material/Button';

interface Props {
    color: string;
    variant: "text" | "contained" | "outlined";
    children: JSX.Element | JSX.Element[] | string;
    sx?: any;
    onClick?: () => void;
}

export default function Button({ color, variant, children, sx, onClick }: Props) {
    return (
        <MuiButton onClick={onClick} variant={variant} sx={{
            backgroundColor: variant !== "outlined" ? color : null,
            color: variant === "outlined" ? color : "auto",
            border: variant === "outlined" ? `1px solid ${color}` : null,
            width: '10rem',
            padding: '0.5rem 1rem',
            borderRadius: 0,
            fontWeight: 800,
            ...sx
        }}>
            {children}
        </MuiButton>
    )
}
