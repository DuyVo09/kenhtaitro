export interface EventStatus {
    event_id: string;
    is_published: boolean;
}

export interface EventDataTable {
  id: 1,
  school: string,
  location: string,
  event_name: string,
  organizer: string,
  start_date: string,
  end_date: string,
  event_field: string,
  schale: number,
  upload_time: string
}

export interface IEventViewModel {
  id: number;
  school: string;
  location: string;
  event_name: string;
  organizer: string;
  start_date: Date;
  end_date: Date;
  event_field: string;
  full_name: string;
  created_at: Date;
  updated_at: Date;
  total_reach: number;
  event_type_id: number;
  event_type: string;
}

export type IEventDataModel = {
  id?: number;
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
  deadline_sponsorship: string;
  event_field: string;
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

export interface IEventFormProps {
  initialValue: IEventDataModel;
  onSubmit?: (formValues: IEventDataModel) => void;
  noEdit: boolean;
}

export interface IImageUploader {
  height: string | number | undefined;
  width: string | number | undefined;
  text: string;
  onUploadFile: (file: File, imageStr: any) => void;
}

export interface ICategoryOption {
  label: string;
  id: number;
}
