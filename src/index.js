import React from "react";
import ReactDOM from "react-dom";

//外部コンポーネントの呼び出し
import ColorfulMsg from "./components/ColorfulMsg";

//コンポーネント 関数的な定義
// Functional conponent
// style={{color:"blue"}}
//１つめの｛｝:JS用，2つ目の:｛｝オブジェクト用
const App = () => {
  return (
    <>
      <h2>REACTハンズオン！</h2>
      <ColorfulMsg color="blue" message="Reactは難しくないよ～" />
    </>
  );
};

//第一引数：コンポーネント，第2引数index.htmlに書かれてるId
ReactDOM.render(<App />, document.getElementById("root"));

//props コンポーネントへの引数的な
//ColorfulMsg color="blue"/>
