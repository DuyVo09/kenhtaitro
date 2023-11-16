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
    startTime: number;
    endTime: number;
    sponsorDeadline: number;
    eventCategory: string[];
    totalReachCount: number;
    offlineReachCount: number;
    firstYearPersent?: number | undefined;
    exclusivePackagePrice: string;
    diamondPackagePrice: string;
    goldPackagePrice: string;
    silverPackagePrice: string;
    bronzePackagePrice: string;
    companionPackagePrice: string;
    otherPackagePrice?: string | undefined;
    proposalLink: string;
}

export interface IEventFormProps {
    initialValue: IEventDataModel;
    onSubmit?: (formValues: IEventDataModel) => void;
    noEdit: boolean;
}