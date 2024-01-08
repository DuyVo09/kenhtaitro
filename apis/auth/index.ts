import { IResponse } from "@/common/types";
import { ISignInResponse } from "@/types/auth-data";
import { http } from "@/utils/http";
import qs from "qs";

export const login = (
  username: string,
  password: string
): Promise<IResponse<ISignInResponse>> => {
  const form = qs.stringify({ username: username, password: password });
  // const form = { username, password }
  console.log(form);
  return http.post("/auth/log-in", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });
};

export const getAccessToken = (refreshToken: string): Promise<string> => {
  return http.post("/auth/refresh-token", { refreshToken });
};

export const register = (
  full_name: string,
  email: string,
  company: string,
  phone: string,
  password: string,
  confirmed_password: string
): Promise<ISignInResponse> => {
  const form = qs.stringify({
    full_name,
    email,
    company,
    phone,
    password,
    confirmed_password,
  });
  return http.post("/users/personality/register", form, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });
};

export const getProfile = (): Promise<any> => {
  return http.get("/users/personality/profile");
}
