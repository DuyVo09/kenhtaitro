import SideContactUsSection from "@/common/sections/SideContactUsSection";
import { Box, Typography } from "@mui/material";
import { ContactForm } from "./_components";

const ContactPage = () => {
  return (
    <div className="flex-col flex w-full items-center">
      <div className="max-w-[1440px]">
        <Typography className="text-blue-700 text-[40px] font-bold font-poppins capitalize text-center">
          Liên hệ
        </Typography>

        <Typography className="text-neutral-500 text-lg font-medium font-poppins text-center my-9">
          Vui lòng để lại thông tin liên hệ bên dưới
        </Typography>

        <Box width="1200px" display="flex" bgcolor="white">
          <SideContactUsSection />

          <Box p={10} width="100%" my={5}>
            <ContactForm />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ContactPage;
