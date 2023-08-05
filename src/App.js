
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashbaord from "./components/Dashbaord";
import Profile from "./components/Profile";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbaord />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
