export type Spot = {
  id: number;
  name: string;
  imgUrl: string;
  lat: number;
  lng: number;
  spendTime: number;
};

export const isSpot = (x: unknown): x is Spot => {
  if (typeof (x as Spot).id !== "number") return false;
  if (typeof (x as Spot).name !== "string") return false;
  if (typeof (x as Spot).imgUrl !== "string") return false;
  if (typeof (x as Spot).lat !== "number") return false;
  if (typeof (x as Spot).lng !== "number") return false;
  if (typeof (x as Spot).spendTime !== "number") return false;

  return true;
};

export const data: Spot[] = [
  {
    id: 0,
    name: "清水寺",
    imgUrl:
      "https://s3-ap-northeast-1.amazonaws.com/thegate/2021/05/19/10/51/59/Kiyomizudera_Temple_Title.jpg",
    lat: 34.9948282,
    lng: 135.7848819,
    spendTime: 30,
  },
  {
    id: 1,
    name: "産寧坂",
    imgUrl:
      "https://kyoto-meguru.com/wp-content/uploads/2021/01/DC_18273645.jpg",
    lat: 34.9963463,
    lng: 135.7786888,
    spendTime: 10,
  },
  {
    id: 2,
    name: "八坂神社",
    imgUrl:
      "https://rimage.gnst.jp/gurutabi.gnavi.co.jp/image/public/img/article/c7/42/art002448/article_art002448_og_facebook.jpg?1617699002",
    lat: 34.9963679,
    lng: 135.7721227,
    spendTime: 80,
  },
  {
    id: 3,
    name: "伏見稲荷大社",
    imgUrl: "https://souda-kyoto.jp/blog/ea410e000000c9rx-img/2.jpg",
    lat: 34.9681706,
    lng: 135.7686752,
    spendTime: 40,
  },
  {
    id: 4,
    name: "金閣寺",
    imgUrl:
      "https://s3-ap-northeast-1.amazonaws.com/thegate/2021/03/29/19/44/10/Kinkakuji_Temple_Sharidenn.jpg",
    lat: 35.0394312,
    lng: 135.7292082,
    spendTime: 70,

  },
  {
    id: 5,
    name: "銀閣寺",
    imgUrl:
      "https://www.shokoku-ji.jp/wp-content/themes/shokokuji/assets/img/og/ginkakuji.jpg",
    lat: 35.0264048,
    lng: 135.7981652,
    spendTime: 100,
  },
  {
    id: 6,
    name: "東寺",
    imgUrl:
      "https://www.img-ikyu.com/contents/dg/special/kankou/area/kyoto/spo12.jpg?auto=compress,format&fit=crop&w=650&h=450&lossless=0",
    lat: 34.9818573,
    lng: 135.7452177,
    spendTime: 80,
  },
  {
    id: 7,
    name: "下鴨神社",
    imgUrl:
      "https://www.img-ikyu.com/contents/dg/special/kankou/area/kyoto/spot10.jpg?auto=compress,format&fit=crop&w=650&h=450&lossless=0",
    lat: 35.0389822,
    lng: 135.7708181,
    spendTime: 90,
  },
  {
    id: 8,
    name: "北野天満宮",
    imgUrl:
      "https://www.img-ikyu.com/contents/dg/special/kankou/mapple/26010042_00020.jpg?auto=compress,format&fit=crop&w=650&h=450&lossless=0",
    lat: 35.0311737,
    lng: 135.7001038,
    spendTime: 90,
  },
  {
    id: 9,
    name: "三十三間堂",
    imgUrl:
      "https://www.img-ikyu.com/contents/dg/special/kankou/spot/3517_origin.jpg?auto=compress,format&fit=crop&w=650&h=450&lossless=0",
    lat: 34.9878889,
    lng: 135.7695239,
    spendTime: 40,
  },
];
