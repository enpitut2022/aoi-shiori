import { useState } from "react";
import "./App.css";
import { useDnDSort } from "./useDnDSort";
import { Spot, data } from "./data";

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

function App() {
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
