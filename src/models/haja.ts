export interface Coordinate {
  coordinateX: number | null;
  coordinateY: number | null;
}

export interface HajaItem {
  uid: string;
  cate: string;
  description: string;
  imgURL: string;
  created_at: Date;
  updated_at: Date;
  coordinate: Coordinate;
}
