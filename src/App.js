/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import * as C from "./components";
function App() {
  return (
    <div className="App">
      <C.Header />
      <div
        css={css`
          width: 100%;
          height: 2000px;
        `}
      ></div>
    </div>
  );
}

export default App;
