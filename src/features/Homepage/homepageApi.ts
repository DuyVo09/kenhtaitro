import { axiosClient } from "utils/axiosClient";
import { ListParams, BaseResponse, ExtraResponse } from "utils/commonModels";
import { IEventViewModel, SponserParams, SponsorDataModel } from "./models";

export const organizerHomeApi = {
  getRecent(params: ListParams): Promise<BaseResponse<IEventViewModel[]>> {
    const url = `/events/organizer/recent`;
    return axiosClient.get(url, { params });
  },
};

export const businessHomeApi = {
  getRecent(params: ListParams): Promise<ExtraResponse<BaseResponse<IEventViewModel[]>>> {
    const url = `/events/newest/search`;
    return axiosClient.get(url, { params });
  },
  sponsor(data: SponserParams): Promise<BaseResponse<SponsorDataModel>> {
    const url = `/sponsorships/business/sponsor`;
    return axiosClient.post(url, data);
  },
};
