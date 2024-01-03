import { Box } from "@mui/material";
import Image from "next/image";

interface BlogCarouselItemProps {
  href: string;
  img: string;
  centerImg: boolean;
}

export const BlogCarouselItem = ({
  href,
  img,
  centerImg,
}: BlogCarouselItemProps) => {
  return (
    <Box
      height="300px"
      width="100%"
      display="flex"
      justifyContent="center"
      sx={{
        transform: centerImg ? "scale(1)" : "scale(0.7)",
        transition: "transform 0.6s ease 0s",
      }}
    >
      <Box
        position="relative"
        height="100%"
        width={centerImg ? "80%" : "100%"}
        overflow="hidden"
      >
        <Image
          src={img}
          alt="Blog image"
          fill
          style={{
            objectFit: "cover",
            maxWidth: "100%",
            height: "auto"
          }} />
      </Box>
    </Box>
  );
};
