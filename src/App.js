/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import * as C from "./components";
import * as P from "./Pages";
function App() {
  return (
    <div className="App">
      <C.Header />
      <P.Section></P.Section>
    </div>
  );
}

export default App;
