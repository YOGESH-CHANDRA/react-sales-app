import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import AddSales from "./Pages/AddSales";
import TodaysTotalRevenue from "./Pages/TodaysTotalRevenue";
import Login from "./Pages/Login";
import Top5sales from "./Pages/Top5sales";
import Register from "./Pages/Register";
import Footer from "./component/Footer";

// routing and navigation of all pages

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddSales />} />
          <Route path="/top5sales" element={<Top5sales />} />
          <Route path="/todaysTotalRevenue" element={<TodaysTotalRevenue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
