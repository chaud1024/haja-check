export interface House {
  uid: string;
  title: string;
  address: string;
  imgURL: string;
  user: {
    uid: String;
  };
  index: [
    "현관",
    "거실",
    "침실 1",
    "침실 2",
    "주방",
    "다용도실",
    "욕실 1",
    "욕실 2",
  ];
}
