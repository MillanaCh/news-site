import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./PagesRouter/Home";
import AdminDashboard from "./PagesRouter/AdminDashboard";
import Login from "./PagesRouter/Login";
import AddNews from "./PagesRouter/dashboard-pages/AddNews";
import SeeAllNews from "./PagesRouter/dashboard-pages/SeeAllNews";
import About from "./PagesRouter/About";
import aboutUs from "./PagesRouter/about-routes.jsx/about-us";
import locations from "./PagesRouter/about-routes.jsx/locations";
import ourTeam from "./PagesRouter/about-routes.jsx/our-team";
import contactUs from "./PagesRouter/about-routes.jsx/contact-us";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="add-news" element={<AddNews />} />
          <Route path="see-news" element={<SeeAllNews />} />
        </Route>
        <Route path="/about" element={<About/>}>
          <Route path="about-us" element={<aboutUs/>}/>
          <Route path="contact-us" element={<locations/>}/>
          <Route path="our-team" element={<ourTeam/>}/>
          <Route path="locations" element={<contactUs/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
