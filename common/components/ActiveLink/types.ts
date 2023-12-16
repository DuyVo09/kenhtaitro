import { LinkProps } from "next/link";
import { INavigation } from "../AppHeader/types";

export type TActiveLink = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    childPath?: INavigation[];
    activeClassName?: string;
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;
