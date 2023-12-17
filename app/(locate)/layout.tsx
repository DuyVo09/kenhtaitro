import { AppFooter } from "@/common/components/AppFooter";
import AppHeader from "@/common/components/AppHeader";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AppHeader />
      <div className="flex justify-center">
        <div className="w-[1440px] max-w-[1440px] min-w-[1440px]">{children}</div>
      </div>
      <AppFooter />
    </>
  );
}
