import React from "react";
import Link from "@mui/material/Link";     
import Typography from "@mui/material/Typography";

export const ReqLink = () => {
    return (
        <Typography component="h5" variant="h6" >
            <Link href="/requirements">Условия акции</Link>
        </Typography>
    );
};
