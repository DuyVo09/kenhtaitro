export interface ListParams {
  limit: number;
  page: number;
}

export interface BaseResponse<T> {
  detail: string;
  data: T;
  metadata: MetaData | null;
  status_code: number;
}

export interface MetaData {
  prev_page: number | null;
  current_page: number;
  next_page: number | null;
  total_page: number;
  limit: number;
}
