// "use client";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import classNames from "classnames";
import "@/styles/_global.scss";
import { CssBaseline, StyledEngineProvider, createTheme } from "@mui/material";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const montserrat = Montserrat({
  subsets: ["vietnamese"],
  preload: true,
  fallback: ["Quicksand"],
});

export default function RootLayout({ children, params,  }: any) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <body className={classNames(montserrat.className, "bg-background")}>
          <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
        </body>
      </StyledEngineProvider>
    </html>
  );
}
