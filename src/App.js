import HomePage from "./pages/HomePage"
import Registrstion from "./pages/Registration";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* The Router decides which component to show based on the current URL.*/}
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/signup" element={<Registrstion/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
