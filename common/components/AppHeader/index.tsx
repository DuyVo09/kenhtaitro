import Image from "next/image";
import { INavigation } from "./types";
import { ActiveLink } from "../ActiveLink";
import {
  ArrowDropDown,
  NotificationsNoneOutlined,
  PersonAddAlt1Outlined,
  Search,
} from "@mui/icons-material";
import DropdownMenu from "../DropdownMenu";

function AppHeader() {
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
    <div className="flex border-2 pl-2.5 h-28 items-center gap-7 justify-center">
      <div style={{ height: "100%", width: "200px", position: "relative" }}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-auto justify-between px-5 max-w-[1000px]">
        {navigation.map(({ path, label, children }) => (
          <div key={path + label} className="flex relative">
            <ActiveLink              
              href={path}
              childPath={children}
              activeClassName="group is-active font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#659FDF] to-[#B7B5F1]"
              className="group peer relative uppercase pt-3 pb-2 font-medium flex items-center"
            >
              <div className="relative group-[.is-active]:before:block before:absolute before:w-full before:border-primary before:top-[-14px] before:hidden">
                {label}
              </div>
              {children && (
                <ArrowDropDown className="h-4 w-4 absolute -right-4 top-1/2 -translate-y-1/2 transform transition-transform duration-200 group-hover:rotate-180 text-black group-hover:text-primary group-[.is-active]:text-primary" />
              )}
            </ActiveLink>
            {children && <DropdownMenu children={children} />}
          </div>
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
