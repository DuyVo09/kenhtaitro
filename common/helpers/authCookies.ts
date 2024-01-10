
import { ISignInResponse } from "@/types/auth-data";
import { getCookie, setCookie, deleteCookie, hasCookie } from "cookies-next";

export function getAuthCookies () {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  console.log('accessToken: ', accessToken);
  return { accessToken, refreshToken };
};

export function setAuthCookies (
  access_token: string, 
  refresh_token: string) {
  setCookie("accessToken", access_token, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
  setCookie("refreshToken", refresh_token, {
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