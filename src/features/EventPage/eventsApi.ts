import { axiosClient } from "utils/axiosClient";

export const eventsApi = {
    getAll() {
        const url = '/events/event/all';
        return axiosClient.get(url);
    },
    getById(id: string) {
        const url = `/events/${id}`;
        return axiosClient.get(url);
    },
    
}