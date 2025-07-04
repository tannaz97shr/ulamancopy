export type MapPoint = {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  category: string;
  description: string;
  images: string[];
};

export interface ISchedule {
  activities: string[];
  time: string;
}
