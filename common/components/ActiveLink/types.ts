import { LinkProps } from "next/link";

export type TActiveLink = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    activeClassName?: string;
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;
