import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function ProductCounter() {
    const [count, setCount] = useState(1);
    return (
        <Box sx={{ backgroundColor: "#f1f1f1", padding: "0.2rem", marginRight: "0.5rem" }}>
            <Button onClick={() => {
                if (count > 1)
                    setCount(count - 1)
            }}>-</Button>
            {count}
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </Box>
    )
}
