import { BoxProps } from "@mui/material";

export interface TEventCardProps extends BoxProps {
    img: string;
    title: string;
    description: string;
    location: string;
    participant: number;
}