export interface IEventViewModel {
    id: number;
    schoolName: string;
    location: string;
    eventName: string;
    eventOrganization: string;
    startTime: string;
    endTime: string;
    eventCategory: string[];
    schale: number;
    uploadTime: string;
}

export type IEventDataModel = {
    bannerImage: string;
    contactName: string;
    contactPhone: string;
    contactEmail: string;
    schoolName: string;
    location: string;
    eventName: string;
    eventDescription: string;
    eventImages?: File[] | undefined;
    eventOrganization: string;
    startTime: Date;
    endTime: Date;
    sponsorDeadline: Date;
    eventCategory: string[];
    totalReachCount: number;
    offlineReachCount: number;
    firstYearPersent?: number | undefined;
    exclusivePackageValue: string;
    diamondPackageValue: string;
    goldPackageValue: string;
    silverPackageValue: string;
    bronzePackageValue: string;
    companionPackageValue: string;
    otherPackageValue?: string | undefined;
    proposalLink: string;
}

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