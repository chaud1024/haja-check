export interface Coordinate {
  coordinateX: number | null;
  coordinateY: number | null;
}

export interface HajaItem {
  uid: string;
  img: Image;
  description: string;
  created_at: Date;
  updated_at: Date;
  coordinate: Coordinate;
  house: {
    uid: string;
  };
  index: string;
}

export interface Image {
  uid: string;
  original: string;
  url: string; //uuid.png
}
