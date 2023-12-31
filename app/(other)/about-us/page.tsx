import { Box } from "@mui/material";
import {BannerSection, HistorySection, MissionSection, VisionSection} from "./_sections";
import { PartnerSection } from "@/common/sections/PartnerSection";
import { QuoteSection } from "@/common/sections/QuoteSection";

function AboutUs() {
    return ( <Box className="flex-col flex w-full items-center">
        <BannerSection />
        <HistorySection />
        <VisionSection />
        <MissionSection />
        <PartnerSection />
        <QuoteSection />
    </Box> );
}

export default AboutUs;