import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import PriceCard from "./components/PriceCard/PriceCard";
import Register from "./components/Register/Register";
import Rules from "./components/Rules/Rules";
import Addbook from "./components/Addbook/Addbook";
import "./assets/icon/font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="signup" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="pricecard" element={<PriceCard />}></Route>
          <Route path="rules" element={<Rules />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="addbook" element={<Addbook />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
