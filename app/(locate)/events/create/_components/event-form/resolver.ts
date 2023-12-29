import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, date, number, array } from "yup";

const requiredMsg = "Trường thông tin này là bắt buộc";
const valueLabelSchema = object().shape({
  value: string().required(requiredMsg),
  label: string().required(requiredMsg),
});

const fieldSchema = array().of(valueLabelSchema).default([]).required(requiredMsg);

export const resolver = yupResolver(
  object().shape({
    // bannerImage: string().required(requiredMsg),
    full_name: string().required(requiredMsg),
    phone: string().required(requiredMsg),
    email: string().required(requiredMsg),
    school: string().required(requiredMsg),
    location: string().required(requiredMsg),
    area: string().required(requiredMsg),
    district: string().required(requiredMsg),
    event_name: string().required(requiredMsg).max(90),
    event_description: string()
      .required(requiredMsg)
      .min(50, "Phải nhập ít nhất 50 kí tự")
      .max(3000),
    organizer: string().required(requiredMsg),
    start_date: date().required(requiredMsg).typeError("Invalid Date"),
    end_date: date().required(requiredMsg).typeError("Invalid Date"),
    deadline_sponsorship: string().required(requiredMsg),
    event_field: fieldSchema,
    tags: fieldSchema,
    total_reach: number()
      .required(requiredMsg)
      .typeError("Trường này chỉ nhập số"),
    total_reach_in_house: number()
      .required(requiredMsg)
      .typeError("Trường này chỉ nhập số"),
    first_year_attendee_percentage: number().typeError(
      "Trường này chỉ nhập số"
    ),
    exclusive_sponsorship: number()
      .required(requiredMsg)
      .typeError("Trường này chỉ nhập số"),
    diamond_sponsorship: number()
      .required(requiredMsg)
      .typeError("Trường này chỉ nhập số"),
    gold_sponsorship: number()
      .required(requiredMsg)
      .typeError("Trường này chỉ nhập số"),
    silver_sponsorship: number()
      .required(requiredMsg)
      .typeError("Trường này chỉ nhập số"),
    bronze_sponsorship: number()
      .required(requiredMsg)
      .typeError("Trường này chỉ nhập số"),
    companion_sponsorship: number()
      .required(requiredMsg)
      .typeError("Trường này chỉ nhập số"),
    other_sponsorship: number()
      .nullable()
      .transform((_, val) => (val ? Number(val) : null)),
    proposal: string().required(requiredMsg),
  })
);
