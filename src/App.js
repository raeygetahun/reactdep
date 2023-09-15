import HomePage from "./pages/HomePage"
import Registrstion from "./pages/Registration";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        {/* The Router decides which component to show based on the current URL.*/}
        <Route exact path="/" element={<HomePage/>}></Route>
        {/* <Route exact path="/signup" element={<Registrstion/>}></Route> */}
      </Routes>
    </HashRouter>
  );
}
export default App;
