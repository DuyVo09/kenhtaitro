import AppHeader from "@/components/AppHeader";
import { url } from "inspector";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div
      className="h-[500px] w-full bg-cover"
      style={{ backgroundImage: "url('/images/homeBanner.png')" }}
    >
      <AppHeader />
    </div>
  );
};

export { BannerSection };
