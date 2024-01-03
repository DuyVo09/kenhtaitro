import { INavigation } from "./types";

export const businessRoutes: INavigation[] = [
    { path: "/business/home", label: "Trang chủ" },
    {
      path: "#",
      label: "Sự kiện",
      children: [
        { path: "/business/events", label: "Xem sự kiện" },
        { path: "/business/events/manage", label: "Quản lý sự kiện" },
      ],
    },
    { path: "/business/calendar", label: "Lịch sự kiện" },
    {
      path: "#",
      label: "Blog",
      children: [
        { path: "/business/blogs", label: "Tất cả blog" },
        { path: "/business/blogs/category1", label: "Blog category 1" },
        { path: "/business/blogs/category2", label: "Blog category 2" },
      ],
    },
    { path: "/about-us", label: "Về chúng tôi" },
    { path: "/contact", label: "Liên hệ" },
  ];

  export const organizationRoutes: INavigation[] = [
    { path: "/organization/home", label: "Trang chủ" },
    {
      path: "#",
      label: "Sự kiện",
      children: [
        { path: "/organization/events/create", label: "Tạo sự kiện" },
        { path: "/organization/events/my", label: "Sự kiện của tôi" },
      ],
    },
    { path: "/organization/calendar", label: "Lịch sự kiện" },
    {
      path: "#",
      label: "Blog",
      children: [
        { path: "/organization/blogs", label: "Tất cả blog" },
        { path: "/organization/blogs/category1", label: "Blog category 1" },
        { path: "/organization/blogs/category2", label: "Blog category 2" },
      ],
    },
    { path: "/about-us", label: "Về chúng tôi" },
    { path: "/contact", label: "Liên hệ" },
  ];