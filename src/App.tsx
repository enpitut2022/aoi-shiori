import { useState } from "react";
import "./App.css";
import { useDnDSort } from "./useDnDSort";
import { Spot, data } from "./data";
import { Container, Draggable } from "react-smooth-dnd";
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
  const results = useDnDSort(data);

  const hoge = (
    <div>
      <p>ドラッグ&ドロップで順番を入れ替えられます！</p>
      <div className="column">
        <div className="timeLine">
          <div>朝</div>
          <div>昼</div>
          <div>夜</div>
        </div>
        <div>
          <p>1日目</p>
          {/* 配列の要素を表示する */}
          {results.map((item) => (
            <div className="card" key={item.key} {...item.events}>
              <p>{item.value.name}</p>
              <img src={item.value.imgUrl} alt="ソート可能な画像" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const foo = ["foo", "bar", "baz"];

  return (
    <div>
      <Container>
        {foo.map((val, i) => {
          return <Draggable key={i}>{val}</Draggable>;
        })}
      </Container>
      <Cards />
    </div>
  );
}

export default App;
