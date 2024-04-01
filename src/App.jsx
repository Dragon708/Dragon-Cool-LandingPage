import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
