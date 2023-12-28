"use client";

import { AppFooter } from "@/common/components/AppFooter";
import AppHeader from "@/common/components/AppHeader";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { PropsWithChildren, useEffect } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    dayjs.locale("vi");
  }, []);

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
