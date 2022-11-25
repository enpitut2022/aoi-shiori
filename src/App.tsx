import "./App.css";
import { Spot, data } from "./data";
import interact from 'interactjs'

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
  const results = data;
  const adds = data;


  // Drag
  interact(".drag").draggable({
    onstart(e) {
      if (!e.target.posX) e.target.posX = 0;
      if (!e.target.posY) e.target.posY = 0;
    },
    onmove(e) {
      e.target.posX += e.dx;
      e.target.posY += e.dy;
      e.target.style.transform = `translate(${e.target.posX}px, ${e.target.posY}px)`;
    },
  });

  // Drop
  interact(".drop")
    .dropzone({
      ondrop(e) {
        const dragQuiz = e.relatedTarget.getAttribute("quiz");
        const dropQuiz = e.target.getAttribute("quiz");
        if (true) {
          // console.log("あたり!!");
        }
      },
    })
    .on("dropactivate", function (e) {
      e.target.classList.add("drop-activated");
    });

  return (
    <div className="column">
      <div className="drop">
        <p>旅行の予定</p>
        {results.map((item) => (
          <div className="drag">
            <p>{item.name}</p>
            <img src={item.imgUrl} alt="ソート可能な画像" />
          </div>
        ))}
      </div>
      {/* 配列の要素を表示する */}
      <div className="drop">
        <p>追加候補</p>
        {adds.map((item) => (
          <div className="drag">
            <p>{item.name}</p>
            <img src={item.imgUrl} alt="ソート可能な画像" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
