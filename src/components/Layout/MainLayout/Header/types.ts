export interface INavbarItem {
    path: string,
    label: string,
    children: INavbarItem[] | null
}