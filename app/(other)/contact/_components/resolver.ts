import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, date, number, array, } from "yup";

const requiredMsg = "Trường thông tin này là bắt buộc";

export const resolver = yupResolver(
  object().shape({
    name: string().required(requiredMsg),
    email: string().email().required(requiredMsg),
    phone: string().nullable(),
    title: string().required(requiredMsg),
    content: string().required(requiredMsg),
  })
);
