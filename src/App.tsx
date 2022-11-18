import { useState } from "react";
import "./App.css";
import { useDnDSort } from "./useDnDSort";

interface Result {
  // key propsに設定する文字列
  key: string;
  // 配列内の画像URL文字列
  value: Spot;
  // ドラッグ＆ドロップ処理で使うイベント関数を返す関数
  events: {
    ref: (value: any) => void;
    onMouseDown: (event: any) => void;
  };
}

type Spot = {
  name: string;
  imgUrl: string;
};

function App() {
  const data: Spot[] = [
    {
      name: "清水寺",
      imgUrl:
        "https://s3-ap-northeast-1.amazonaws.com/thegate/2021/05/19/10/51/59/Kiyomizudera_Temple_Title.jpg",
    },
    {
      name: "産寧坂",
      imgUrl:
        "https://kyoto-meguru.com/wp-content/uploads/2021/01/DC_18273645.jpg",
    },
    {
      name: "八坂神社",
      imgUrl:
        "https://rimage.gnst.jp/gurutabi.gnavi.co.jp/image/public/img/article/c7/42/art002448/article_art002448_og_facebook.jpg?1617699002",
    },
    {
      name: "伏見稲荷大社",
      imgUrl: "https://souda-kyoto.jp/blog/ea410e000000c9rx-img/2.jpg",
    },
    {
      name: "金閣寺",
      imgUrl:
        "https://s3-ap-northeast-1.amazonaws.com/thegate/2021/03/29/19/44/10/Kinkakuji_Temple_Sharidenn.jpg",
    },
    {
      name: "円山公園",
      imgUrl:
        "https://www.city.kyoto.lg.jp/kensetu/cmsfiles/contents/0000257/257049/maruyama.JPG",
    },
    {
      name: "銀閣寺",
      imgUrl:
        "https://www.shokoku-ji.jp/wp-content/themes/shokokuji/assets/img/og/ginkakuji.jpg",
    },
  ];

  const results = useDnDSort(data);

  return (
    <div>
      {/* 配列の要素を表示する */}
      {results.map((item) => (
        <div key={item.key} {...item.events}>
          <p>{item.value.name}</p>
          <img src={item.value.imgUrl} alt="ソート可能な画像" />
        </div>
      ))}
    </div>
  );
}

export default App;
