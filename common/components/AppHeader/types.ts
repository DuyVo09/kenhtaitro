export type INavigation = {
    path: string;
    label: string;
    children?: INavigation[];
}