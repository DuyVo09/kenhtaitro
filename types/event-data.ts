import { ITitleImageItem, IValueLabel } from "@/common/types";

export interface IEventDataModel {
  id: string;
  name: string;
  schoolName: string;
  location: string;
  timeStart: string;
  category: string;
  size: number;
}

export type TEventData = {
  id: string;
  img: string;
  title: string;
  date: string;
  description: string;
  location: string;
  participant: number;
};

export type IEventFormModel = {
  id?: number;
  full_name: string;
  phone: string;
  email: string;
  school: string;
  location: string;
  area: string;
  district: string;
  event_name: string;
  event_description: string;
  event_image?: ITitleImageItem[];
  organizer: string;
  start_date: Date;
  end_date: Date;
  deadline_sponsorship: string;
  category: IValueLabel<string>[];
  total_reach: number;
  total_reach_in_house: number;
  first_year_attendee_percentage?: number;
  exclusive_sponsorship: number;
  diamond_sponsorship: number;
  gold_sponsorship: number;
  silver_sponsorship: number;
  bronze_sponsorship: number;
  companion_sponsorship: number;
  other_sponsorship?: number | null;
  proposal: string;
  notes?: string | null;
  is_published?: boolean;
  is_edit?: boolean;
  creator_id?: number;
  event_type_id?: number;
};
