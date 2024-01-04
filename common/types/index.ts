export interface ITitleImageItem {
    url: string;
    file: File | null
}

export interface IValueLabel<T> {
    value: T;
    label: string;
}

export interface IResponse<T> {
    data: T;
    status: number;
    detail?: string;
}