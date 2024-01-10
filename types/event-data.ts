import { ITitleImageItem, IValueLabel } from "@/common/types";

enum EventType {
  PENDING = "Pending",
  APPROVED = "Approved",
  DENIED = "Denied",
  WAITING = "Waiting",
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
}

interface Metadata {
  prev_page?: number;
  current_page: number;
  next_page?: number;
  total_page: number;
  limit: number;
}

interface BaseEventResponse {
  detail: string;
  metadata?: Metadata;
  status_code: number;
}

export interface IEventUpdateStatus {
  processed_event_id: number;
  status: EventType;
}

export interface IEventUpdateStatusResponse extends BaseEventResponse {
  data: {
    processed_event_id: number;
  };
}

export interface PublishedEvent {
  id: number;
  event_image: string[];
  event_name: string;
  slug: string;
  event_description: string;
  start_date: string;
  total_reach: number;
  organizer: number;
  location: string;
}

export interface IEventPublishedResponse extends BaseEventResponse {
  data: PublishedEvent[];
}

export interface IEventSearchByCategory {
  category_id: number;
  page?: number;
  limit?: number;
}

export interface IEventByCategoryResponse extends BaseEventResponse {
  data: PublishedEvent[];
}

export interface EventDetail {
  event_image: string[];
  phone: string;
  organizer: string;
  first_year_attendee_percentage: number;
  is_published: boolean;
  categories: string[];
  email: string;
  start_date: Date;
  exclusive_sponsorship: number;
  is_edit: boolean;
  notes?: string[];
  province: string;
  end_date: Date;
  diamond_sponsorship: number;
  creator_id: number;
  tags: string[];
  district: string;
  deadline_sponsorship: Date;
  gold_sponsorship: number;
  updated_at: Date;
  event_type: EventType;
  school: string;
  total_reach: number;
  silver_sponsorship: number;
  created_at: Date;
  id: number;
  location: string;
  bronze_sponsorship: number;
  other_sponsorship: number;
  draft_id?: number;
  event_id?: number;
  event_name: string;
  total_reach_in_house: number;
  companion_sponsorship: number;
  event_description: string;
  full_name: string;
  slug: string;
  proposal: string;
}

export interface IEventDetailResponse extends BaseEventResponse {
  data: EventDetail;
}

export interface IEventBusinessResponse extends BaseEventResponse {
  data: EventDetail[];
}

interface DraftEvent {
  id: number;
  event_name: string;
  slug: string;
  school: string;
  start_date: Date;
  end_date: Date;
  categories: string[];
  total_reach: number;
  create_at: Date;
  updated_at: Date;
}

export interface IEventDraftListResponse extends BaseEventResponse {
  data: DraftEvent[];
}

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

export interface IDraftEventDataModel {
  full_name: string;
  phone: string;
  email: string;
  school: string;
  location: string;
  event_name: string;
  event_description: string;
  event_image: string;
  organizer: string;
  start_date: Date;
  end_date: Date;
  deadline_sponsorship: Date;
  event_category: string;
  total_reach: number;
  total_reach_in_house: number;
  first_year_attendee_percentage: number;
  exclusive_sponsorship: number;
  diamond_sponsorship: number;
  gold_sponsorship: number;
  silver_sponsorship: number;
  bronze_sponsorship: number;
  companion_sponsorship: number;
  other_sponsorship: number;
  proposal: string;
  note: string;
}

export interface IDraftEventResponse {
  errorCode: number;
  message: string;
  errors: string[];
  data: {
    event_draft_id: string;
  };
}

export interface IDraftDeleteResponse extends BaseEventResponse {
  data: {
    draft_event_id: number;
  };
}

export interface SearchEventByContents {
  event_category?: number;
  school?: string;
  province?: string;
  district?: string;
  location?: string;
  start_date?: Date;
  total_reach?: number;
  limit?: number;
  page?: number;
}

export type IEventFormModel = {
  id?: number;
  full_name: string;
  phone: string;
  email: string;
  school: string;
  location: string;
  province: string;
  district: string;
  event_name: string;
  event_description: string;
  event_image?: ITitleImageItem[];
  organizer: string;
  start_date: Date;
  end_date: Date;
  deadline_sponsorship: Date;
  event_category: IValueLabel<string>[];
  tags: IValueLabel<string>[];
  total_reach: number;
  total_reach_in_house: number;
  first_year_attendee_percentage: number;
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
  [key: string]: any;
};

export interface IEventPublished {
    id: number;
    school: string;
    event_name: string;
    slug: string;
    start_date: Date;
    end_date: Date;
    categories: string[];
    created_at: Date;
    updated_at: Date;
    total_reach: number;
    is_edit: boolean;
    event_id?: number;
    event_type?: number;
}

export interface IAllDraftEventResponse extends BaseEventResponse {
  data: IEventPublished[];
}

export interface IEventCreateResponse extends BaseEventResponse {
  data: IEventFormModel;
}