import { useState } from "react";
import "./App.css";

function App() {

  return (
    <div className="App">
      <div>検索：京都</div>
      <div>
        <div>
          <p>清水寺</p>
          <img src="https://s3-ap-northeast-1.amazonaws.com/thegate/2021/05/19/10/51/59/Kiyomizudera_Temple_Title.jpg" />
        </div>
        <div>
          <p>産寧坂</p>
          <img src="https://kyoto-meguru.com/wp-content/uploads/2021/01/DC_18273645.jpg" />
        </div>
        <div>
          <p>八坂神社</p>
          <img src="https://rimage.gnst.jp/gurutabi.gnavi.co.jp/image/public/img/article/c7/42/art002448/article_art002448_og_facebook.jpg?1617699002" />
        </div>
        <div>
          <p>伏見稲荷大社</p>
          <img src="https://souda-kyoto.jp/blog/ea410e000000c9rx-img/2.jpg" />
        </div>
        <div>
          <p>金閣寺</p>
          <img src="https://s3-ap-northeast-1.amazonaws.com/thegate/2021/03/29/19/44/10/Kinkakuji_Temple_Sharidenn.jpg" />
        </div>
        <div>
          <p>円山公園</p>
          <img src="https://www.city.kyoto.lg.jp/kensetu/cmsfiles/contents/0000257/257049/maruyama.JPG" />
        </div>
        <div>
          <p>銀閣寺</p>
          <img src="https://www.shokoku-ji.jp/wp-content/themes/shokokuji/assets/img/og/ginkakuji.jpg" />
        </div>
      </div>
    </div>
  );
}

export default App;
