import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./PagesRouter/Home";
import AdminDashboard from "./PagesRouter/AdminDashboard";
import Login from "./PagesRouter/Login";
import AddNews from "./PagesRouter/dashboard-pages/AddNews";
import SeeAllNews from "./PagesRouter/dashboard-pages/SeeAllNews";
import About from "./PagesRouter/About";
import AboutUs from "./PagesRouter/about-routes.jsx/About-us";
import Locations from "./PagesRouter/about-routes.jsx/Locations";
import OurTeam from "./PagesRouter/about-routes.jsx/Our-team";
import ContactUs from "./PagesRouter/about-routes.jsx/Contact-us";
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
          <Route path="about-us" element={<AboutUs/>}/>
          <Route path="contact-us" element={<ContactUs/>}/>
          <Route path="our-team" element={<OurTeam/>}/>
          <Route path="locations" element={<Locations/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
