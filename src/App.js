import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Restraunt } from "./Pages/Restraunt/Restraunt";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restraunt/:restrauntId" element={<Restraunt />} />
      </Routes>
    </div>
  );
}

export default App;
