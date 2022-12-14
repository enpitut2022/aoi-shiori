import { useState } from "react";
import "./App.css";
import { useDnDSort } from "./useDnDSort";
import { Spot, data } from "./data";
import { Container, Draggable } from "react-smooth-dnd";
//@ts-ignore
import Cards from "./cards";

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

  return (
    <div>
      <Cards />
    </div>
  );
}

export default App;
