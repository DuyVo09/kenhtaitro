import { axiosClient } from "utils/axiosClient";
import { EventStatus, IEventDataModel, IEventViewModel } from "./models";
import { BaseResponse, ListParams, ExtraResponse } from "utils/commonModels";

export const eventsApi = {
  getById(id: number): Promise<ExtraResponse<BaseResponse<IEventDataModel>>> {
    const url = `/events/${id}`;
    return axiosClient.get(url);
  },
  getAll(
    params: ListParams
  ): Promise<ExtraResponse<BaseResponse<IEventDataModel[]>>> {
    const url = `/events/event/all`;
    return axiosClient.get(url);
  },
};

export const organizerEventApi = {
  getByStatus(is_published: boolean): Promise<BaseResponse<IEventViewModel>> {
    const url = `/events/organizer/${is_published}`;
    return axiosClient.get(url);
  },
  sendCreateRequest(
    data: IEventDataModel
  ): Promise<BaseResponse<IEventDataModel>> {
    const url = `/events/organizer/event`;
    return axiosClient.post(url, data, {headers: {
      'Content-Type': 'multipart/form-data'
    }});
  },
  saveDraft(data: IEventDataModel): Promise<BaseResponse<IEventDataModel>> {
    const url = `/events/organizer/draft`;
    return axiosClient.post(url, data);
  },
  cancelDraft(id: number): Promise<BaseResponse<IEventDataModel>> {
    const url = `/events/admin/drafts/${id}`;
    return axiosClient.delete(url);
  },
};

export const businessEventsApi = {
  getByState(state: string): Promise<BaseResponse<IEventViewModel>> {
    const url = `/sponsorships/${state}`;
    return axiosClient.get(url);
  },
};

export const adminEventsApi = {
  getByType(is_published: boolean): Promise<BaseResponse<IEventViewModel>> {
    const url = `/events/admin/type`;
    return axiosClient.get(url, { params: { is_published: is_published } });
  },
  remove(
    id: string,
    is_published: boolean
  ): Promise<BaseResponse<EventStatus>> {
    const url = `/events/admin/${id}/lock-unlock`;
    return axiosClient.put(url, { is_published: is_published });
  },
  delete(id: string) {
    const url = `/events/admin/${id}`;
    return axiosClient.delete(url);
  },
};
