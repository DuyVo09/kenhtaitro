
import { ISignInResponse } from "@/types/auth-data";
import { getCookie, setCookie, deleteCookie, hasCookie } from "cookies-next";

export function getAuthCookies () {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  return { accessToken, refreshToken };
};

export function setAuthCookies (token: ISignInResponse) {
  setCookie("accessToken", token.accessToken, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
  setCookie("refreshToken", token.refreshToken, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
};

export function removeAuthCookies () {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
}

export function hasAuthCookies () {
  return hasCookie("accessToken") && hasCookie("refreshToken");
}