export interface SponserParams {
    event_id: number;
    state: string;
}

export interface SponsorDataModel {
    event_id: number;
    sponsor_id: number;
    state: string;
}

export interface IEventViewModel {
    id: number;
    event_image: string;
    event_name: string;
    event_description: string;
    organizer: string;
    location: string;
    created_at: Date;
}