"use client";

import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";

import { TActiveLink } from ".";

export const ActiveLink = ({
  children,
  activeClassName,
  ...props
}: TActiveLink) => {
  const asPath = usePathname();

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const isActive = asPath == props.href || asPath == props.as;

  return (
    <Link
      {...props}
      className={classNames(
        props.className,
        isActive ? (activeClassName || "") : "text-black"        
      )}
      style={{textDecoration: 'none', }}
    >
      {children}
    </Link>
  );
};
