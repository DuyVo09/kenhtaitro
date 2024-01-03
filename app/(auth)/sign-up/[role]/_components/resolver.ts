import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, ref } from "yup";

export const resolver = yupResolver(
  object().shape({
    full_name: string().required("Họ và tên không được để trống"),
    email: string()
      .required("Email không được để trống")
      .email("Email không hợp lệ"),
    phone: string().required("Số điện thoại không được để trống"),
    company: string().required("Không được để trống trường này"),
    password: string()
      .required("Mật khẩu phải có tối thiểu 6 ký tự")
      .min(6, "Mật khẩu phải có tối thiểu 6 ký tự"),
    confirm_password: string()
      .required("Không được để trống trường này")
      .oneOf([ref("password")], "Mật khẩu không khớp"),
  })
);
