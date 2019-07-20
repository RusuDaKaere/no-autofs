import React from "react";
import ReactDOM from "react-dom";

//コンポーネント 関数的な定義
// Functional conponent
const App = () => {
  return <h2>REACTハンズオン！</h2>;
};

//第一引数：コンポーネント，第2引数index.htmlに書かれてるId
ReactDOM.render(<App />, document.getElementById("root"));
