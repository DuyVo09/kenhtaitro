import { AppFooter } from "@/common/components/AppFooter";
import AppHeader from "@/common/components/AppHeader";
import { PropsWithChildren } from "react";

export default function MainLayout ({ children }: PropsWithChildren) {
  return <>
    <div>
      <AppHeader />
      <>{children}</>
      <AppFooter />
    </div>
  </>
}