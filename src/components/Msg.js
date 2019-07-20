//messageを返すコンポーネントの作成

import React from "react";

// component名と定数名を一緒にする
const Msg = () => {
  return (
    <>
      <p style={{ color: "blue" }}>Reactは難しくないよ～</p>
    </>
  );
};

//ほかのファイルで使うためのExport実施
export default Msg;
