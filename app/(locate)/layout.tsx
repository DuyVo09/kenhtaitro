import { AppFooter } from "@/common/components/AppFooter";
import AppHeader from "@/common/components/AppHeader";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AppHeader />
      <div className="flex justify-center">
        {children}
      </div>
      <AppFooter />
    </>
  );
}
