export type Spot = {
  id: number;
  name: string;
  imgUrl: string;
  lat: number;
  lng: number;
};

export const data: Spot[] = [
  {
    id: 0,
    name: "清水寺",
    imgUrl:
      "https://s3-ap-northeast-1.amazonaws.com/thegate/2021/05/19/10/51/59/Kiyomizudera_Temple_Title.jpg",
    lat: 35.9320893,
    lng: 136.1347813,
  },
  {
    id: 1,
    name: "産寧坂",
    imgUrl:
      "https://kyoto-meguru.com/wp-content/uploads/2021/01/DC_18273645.jpg",
    lat: 34.9963463,
    lng: 135.7786888,
  },
  {
    id: 2,
    name: "八坂神社",
    imgUrl:
      "https://rimage.gnst.jp/gurutabi.gnavi.co.jp/image/public/img/article/c7/42/art002448/article_art002448_og_facebook.jpg?1617699002",
    lat: 35.0036547,
    lng: 135.7616659,
  },
  {
    id: 3,
    name: "伏見稲荷大社",
    imgUrl: "https://cdn2.veltra.com/ptr/20210402060446_464634935_10622_0.jpg?imwidth=800&impolicy=custom",
    lat: 34.9679419,
    lng: 135.769796,
  },
  {
    id: 4,
    name: "金閣寺",
    imgUrl:
      "https://s3-ap-northeast-1.amazonaws.com/thegate/2021/03/29/19/44/10/Kinkakuji_Temple_Sharidenn.jpg",
    lat: 35.0393475,
    lng: 135.7257695,
  },
  {
    id: 5,
    name: "銀閣寺",
    imgUrl:
      "https://www.shokoku-ji.jp/wp-content/themes/shokokuji/assets/img/og/ginkakuji.jpg",
    lat: 35.0270212,
    lng: 135.7933349,
  },
];
