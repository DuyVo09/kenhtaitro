import { Box } from "@mui/material";
import Image from "next/image";

interface BlogCarouselItemProps {
  href: string;
  img: string;
}

export const BlogCarouselItem = ({ href, img }: BlogCarouselItemProps) => {
  return (
    <Box height="300px" width='300px' position="relative" border={1}>
      {/* <Image src={img} alt="Blog image" fill style={{ objectFit: "cover" }} /> */}
    </Box>
  );
};
