import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { BlogCarousel } from "../_components/BlogCarousel";
import { SocialIcon } from "react-social-icons";

export function BlogCarouselSection() {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <BlogCarousel />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box height="150px" width="220px" position="relative">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              style={{
                objectFit: "contain",
                maxHeight: "100%",
              }}
            />
          </Box>
          <Box>
            <Typography className=" text-[20px] font-bold text-primary">
              "Tiếp lửa thương hiệu"
            </Typography>
          </Box>
        </Box>

        <Typography className="text-zinc-500 w-[668px] text-center my-3">
          “Sponsorship Channel - nền tảng tìm kiếm sự kiện tài trợ hàng đầu,
          cung cấp cho doanh nghiệp một cách tiếp cận nhanh chóng, đơn giản và
          hiệu quả để tìm kiếm các sự kiện phù hợp với mục tiêu kinh doanh và
          tối ưu hóa chiến lược tài trợ”
        </Typography>

        <Box display="flex" marginBottom="48px">
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
      </Box>
    </Box>
  );
}
