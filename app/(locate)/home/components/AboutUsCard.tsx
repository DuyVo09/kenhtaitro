import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

interface AboutUsCardProps {
  title: string;
  description: string;
  color: string;
}

const AboutUsCard = ({ title, description, color }: AboutUsCardProps) => {
  return (
    <Box
      width="340px"
      height="340px"
      bgcolor={color}
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent='center'
      p={3}
    >
      <Typography className="font-bold text-xl">{title}</Typography>
      <Typography className="my-2">{description}</Typography>
      <ArrowRightAltOutlined />
    </Box>
  );
};

export default AboutUsCard;
