import { IEventFormModel, IEventByCategoryResponse, 
    IEventPublishedResponse, IEventSearchByCategory, 
    IEventUpdateStatus, IEventUpdateStatusResponse, 
    IEventDraftDetailResponse, IEventDraftListResponse, 
    IDraftDeleteResponse, SearchEventByContents, 
    IAllDraftEventResponse,
    IEventCreateResponse,
 } from "@/types";
import { getCookie } from "@/utils/getCookie";
import { API_URL } from "../constants";
import { ITitleImageItem } from "@/common/types";

const fetchApi = async (url: string, method: string = "GET") => {
    const cookie = getCookie("access_token");
    console.log('cookie: ', url);
    const res = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${cookie}`,
        }});
    return await res.json();
}

const postApi = async (url: string, data: any) => {
    try {
        let cookie = getCookie("access_token");
        cookie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDQzNDAzNjQsInN1YiI6IjMiLCJ0eXBlIjoiYWNjZXNzIn0.bTG0dCnjMWaT2P5Kl5RVodOYaWy5Gv5YtT7B1kSb7i8";
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${cookie}`,
                "Accept": "application/json",
            },
            body: data,
        });
        return await res.json();
    } catch (error) {
        console.log('Error when posting: ', error);
    }
}

// /:event_id 
export const updateEventStatus = async (data: IEventUpdateStatus) 
: Promise<IEventUpdateStatusResponse> => {
    return await fetchApi(`${API_URL}/events/?processed_event_id=${
        data.processed_event_id}&status=${data.status}`, "PUT");
}
// /all
export const getAllPublishedEvents = async (
    page: number = 1,
    limit: number = 10,
): Promise<IEventPublishedResponse> => {
    return await fetchApi(`${API_URL}/events/all?page=${page}&limit=${limit}`);
}
// /categories/:category_id/search
export const searchByCategory = async (data: IEventSearchByCategory)
: Promise<IEventByCategoryResponse> => {
    return await fetchApi(`${API_URL}/events/categories/${data.category_id}/search?page=${data.page}&limit=${data.limit}`);
}
// /draft/:draft_event_id
export const getDraftDetailEvent = async (draft_event_id: number)
: Promise<IEventDraftDetailResponse> => {
    return await fetchApi(`${API_URL}/events/drafts/${draft_event_id}`);
}

// /draft/search
export const getDraftSearchEvent = async (query: string)
: Promise<IEventDraftListResponse> => {
    return await fetchApi(`${API_URL}/events/drafts/search?query=${query}`);
}

// /drafts/:draft_event_id
export const deleteDraftEvent = async (draft_event_id: number) 
: Promise<IDraftDeleteResponse> => {
    return await fetchApi(`${API_URL}/events/drafts/${draft_event_id}`, "DELETE");
}

// /events/search
export const searchEventByContents = async (data: SearchEventByContents)
: Promise<IEventPublishedResponse> => {
    return await fetchApi(`${API_URL}/events/events/search?event_category=${
        data.event_category}&school=${data.school}&province=${
        data.province}&district=${data.district}&location=${
        data.location}&start_date=${data.start_date}&total_reach=${
        data.total_reach}&page=${data.page}&limit=${data.limit}`);
}

// /in-progress/:processed_event_id
export const getInProgressEvent = async (processed_event_id: number)
: Promise<IEventFormModel> => {
    return await fetchApi(`${API_URL}/events/in-progress/${processed_event_id}`);
}

// /in-progress/search
export const searchInProgressEvent = async (query: string):
Promise<IEventPublishedResponse> => {
    return await fetchApi(`${API_URL}/events/in-progress/search?query=${query}`);
}

// /large-scale/search
export const searchLargeScaleEvent = async (page: number = 1, limit: number = 3)
: Promise<IEventPublishedResponse> => {
    return await fetchApi(`${API_URL}/events/large-scale/search?page=${page}&limit=${limit}`);
}

// /newest/search
export const searchNewestEvent = async (page: number = 1, limit: number = 3)
: Promise<IEventPublishedResponse> => {
    // console.log('page: ', API_URL);
    return await fetchApi(`${API_URL}/events/newest/search?page=${page}&limit=${limit}`);
}

// /organizer/draft
export const getAllDraftEvents = async (): Promise<IAllDraftEventResponse> => {
    return await fetchApi(`${API_URL}/events/organizer/draft`);
}

// /organizer/in-progress
export const getAllInProgressEvents = async (): Promise<IAllDraftEventResponse> => {
    return await fetchApi(`${API_URL}/events/organizer/in-progress`);
}

// /organizer/published
export const getAllPublishedEventsByOrganizer = async (): Promise<IAllDraftEventResponse> => {
    return await fetchApi(`${API_URL}/events/organizer/published`);
}

// /publish/:event_id
export const getDetailPublishedEvent = async (event_id: number): Promise<IEventPublishedResponse> => {
    return await fetchApi(`${API_URL}/events/publish/${event_id}`);
}

// /publish/search
export const searchPublishedEvent = async (query: string): Promise<IEventDraftListResponse> => {
    return await fetchApi(`${API_URL}/events/publish/search?query=${query}`);
}

// /search-event
export const searchEvent = async (query: string): Promise<IEventPublishedResponse> => {
    return await fetchApi(`${API_URL}/events/search-event?query=${query}`);
}

// /organizer/draft and /organizer/event
export const submitEvent = async (prefix: string, data: IEventFormModel)
: Promise<IEventCreateResponse> => {
    const formData = new FormData();
    console.log('data: ', data['event_image']![0].file);
    let url: string = prefix;
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === "event_category" || key === "tags") {
                (data[key] as any[]).map((element: { 
                    value: string, label: string }, idx: number) => {
                    if (key === "event_category" && idx === 0) {
                        url += `?${key}=${element.value}`;
                    }
                    else {
                        url += `&${key}=${element.value}`;
                    }
                });
            }
            else if (key.includes("_date") || key === "deadline_sponsorship") {
                formData.append(key, new Date(data[key]).toISOString());
            }
            else if (key === "event_image" && data[key]) {
                data[key]!.map((element: ITitleImageItem) => {
                    formData.append(key, element.file!);
                });
            }
            else if (data[key] !== null && data[key] !== undefined) {
                formData.append(key, data[key]);
            }
        }
    }
    return await postApi(`${API_URL}/events/${url}`, formData);
};