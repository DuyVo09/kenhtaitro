import { PhoneInTalk, Email, Place } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";

const SideContactUsSection = () => {
    return ( <Box
        className="bg-blue-200 bg-opacity-30"
        display="flex"
        flexDirection="column"
        height="650px"
        p={5}
      >
        <Typography className="text-neutral-500 text-[28px] font-semibold">
          Liên hệ chúng tôi
        </Typography>
        <Typography className="text-neutral-500 text-opacity-70 capitalize">
          Sponsorship channel
        </Typography>
        <Typography className="text-neutral-500 text-opacity-70 capitalize">
          Better brand, Better business
        </Typography>
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          justifyContent="center"
        >
          <Box display="flex">
            <PhoneInTalk className="text-neutral-500 mr-4" />
            <Typography className="text-neutral-500  capitalize">
              +84 964 039 698
            </Typography>
          </Box>

          <Box display="flex" my={5}>
            <Email className="text-neutral-500 mr-4" />
            <Typography className="text-neutral-500  capitalize">
              kenhtaitro@gmail.com
            </Typography>
          </Box>

          <Box display="flex">
            <Place className="text-neutral-500 mr-4" />
            <Typography className="text-neutral-500  capitalize">
              203 Nguyễn Văn Thương, <br />
              Phường 25, Quận Bình Thạnh, TP. HCM
            </Typography>
          </Box>
        </Box>
        <Box display="flex">
          <SocialIcon
            url="facebook.com"
            bgColor="transparent"
            fgColor="currentColor"
            className="text-zinc-500 hover:text-primary"
          />
          <SocialIcon
            url="instagram.com"
            bgColor="transparent"
            fgColor="currentColor"
            className="text-zinc-500 hover:text-primary"
          />
          <SocialIcon
            url="tiktok.com"
            bgColor="transparent"
            fgColor="currentColor"
            className="text-zinc-500 hover:text-primary"
          />
          <SocialIcon
            url="youtube.com"
            bgColor="transparent"
            fgColor="currentColor"
            className="text-zinc-500 hover:text-primary"
          />
        </Box>
      </Box> );
}
 
export default SideContactUsSection;