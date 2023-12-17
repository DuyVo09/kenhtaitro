export interface IEventDataModel {
  id: string;
  name: string;
  schoolName: string;
  location: string;
  timeStart: string;
  category: string;
  size: number;
}

export type TEventData = {
  id: string;
  img: string;
  title: string;
  description: string;
  location: string;
  participant: number;
};