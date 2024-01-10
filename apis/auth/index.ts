import { IResponse } from "@/common/types";
import { ISignInResponse, ISignUpResponse } from "@/types/auth-data";
import { http } from "@/utils/http";

export const login = (
  username: string,
  password: string
) => {
  let body = new URLSearchParams({
    username: username,
    password: password,
  });
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json",
    },
    body: body,
  })
    .then((res) => res.json());
};

export const getAccessToken = (refreshToken: string): Promise<string> => {
  return http.post("/auth/refresh-token", { refreshToken });
};

export const register = (
  full_name: string,
  email: string,
  role_id: number,
  company: string,
  phone: string,
  password: string,
  confirmed_password: string
): Promise<IResponse<ISignUpResponse>> => {
  return http.post("/users/personality/register", {
    full_name,
    email,
    role_id,
    company,
    phone,
    password,
    confirmed_password,
  });
};

export const getProfile = (): Promise<IResponse<ISignUpResponse>> => {
  return http.get("/users/profile");
}

