"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { INavigation } from "./types";

function AppHeader() {
  const pathname = usePathname();

  const navigation: INavigation[] = [
    { path: "/home", label: "Trang chủ" },
    {
      path: "#",
      label: "Sự kiện",
      children: [
        { path: "/events", label: "Xem sự kiện" },
        { path: "/events-manage", label: "Quản lý sự kiện" },
      ],
    },
    { path: "/calendar", label: "Lịch sự kiện" },
    { path: "/blogs", label: "Blog" },
    { path: "/about-us", label: "Về chúng tôi" },
    { path: "/contact", label: "Liên hệ" },
  ];

  return (
    <div className="flex border-2 pl-2.5 h-28 items-center">
      <div style={{height: '100%', width: '200px', position: "relative" }}>
        <Image src="/images/logo.png" alt="Logo" fill objectFit="contain" />
      </div>
      <div className="flex flex-auto">some</div>
    </div>
  );
}

export default AppHeader;
