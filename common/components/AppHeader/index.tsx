"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { INavigation } from "./types";
import { ActiveLink } from "../ActiveLink";
import {
  NotificationsNoneOutlined,
  PersonAddAlt1Outlined,
  Search,
} from "@mui/icons-material";

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
    {
      path: "#",
      label: "Blog",
      children: [
        { path: "/blogs", label: "Tất cả blog" },
        { path: "/blogs/category1", label: "Blog category 1" },
        { path: "/blogs/category2", label: "Blog category 2" },
      ],
    },
    { path: "/about-us", label: "Về chúng tôi" },
    { path: "/contact", label: "Liên hệ" },
  ];

  return (
    <div className="flex border-2 pl-2.5 h-28 items-center gap-7">
      <div style={{ height: "100%", width: "200px", position: "relative" }}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-auto justify-between px-5 max-w-[1000px]">
        {navigation.map(({ path, label }) => (
          <ActiveLink
            key={path}
            href={path}
            activeClassName="group is-active font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#659FDF] to-[#B7B5F1]"
            className="uppercase pt-3 pb-2 font-medium"
          >
            <div className="relative group-[.is-active]:before:block before:absolute before:w-full before:border-primary before:top-[-14px] before:hidden">
              {label}
            </div>
          </ActiveLink>
        ))}
      </div>
      <div className="flex align-middle gap-7">
        <Search fontSize="small" />
        <PersonAddAlt1Outlined fontSize="small" />
        <NotificationsNoneOutlined fontSize="small" />
      </div>
    </div>
  );
}

export default AppHeader;
