
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashbaord from "./components/Dashbaord";
import Profile from "./components/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbaord />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
