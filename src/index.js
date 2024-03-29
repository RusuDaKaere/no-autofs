import React from "react";
import ReactDOM from "react-dom";

//外部コンポーネントの呼び出し
import ColorfulMsg from "./components/ColorfulMsg";

//コンポーネント 関数的な定義
// class
// stateを使いたければ，classにする(最新型のReactでは関数でも行ける)
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    const newcount = this.state.count + 1;
    this.setState({ count: newcount });
  };

  // class にはrenderが必要
  render() {
    return (
      <>
        {/*これがJSXでのコメントだ*/}
        <h2>REACTハンズオン！</h2>
        <ColorfulMsg color="blue" message="Reactは難しくないよ～" />
        <ColorfulMsg color="green" message="Vueも難しくないよ～" />
        <ColorfulMsg color="red" message="Angularは，，，" />
        <ColorfulMsg color="red">testtest</ColorfulMsg>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </>
    );
  }
}

//第一引数：コンポーネント，第2引数index.htmlに書かれてるId
ReactDOM.render(<App />, document.getElementById("root"));

//props コンポーネントへの引数的な
//<ColorfulMsg color="blue"/>
