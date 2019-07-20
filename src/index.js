import React from "react";
import ReactDOM from "react-dom";

import Msg from "./components/Msg";

//コンポーネント 関数的な定義
// Functional conponent
// style={{color:"blue"}}
//１つめの｛｝:JS用，2つ目の:｛｝オブジェクト用
const App = () => {
  return (
    <>
      <h2>REACTハンズオン！</h2>
      <Msg />
    </>
  );
};

//第一引数：コンポーネント，第2引数index.htmlに書かれてるId
ReactDOM.render(<App />, document.getElementById("root"));
