//messageを返すコンポーネントの作成

import React from "react";

// component名と定数名を一緒にする
// props は()内に追加 => 勝手にかっこ消されたけど
// color:"blue" -> color: propscolorに変更
const Msg = props => {
  return (
    <>
      <p style={{ color: props.color }}>{props.message}</p>
    </>
  );
};

//ほかのファイルで使うためのExport実施
export default Msg;
