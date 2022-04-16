import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './PagesRouter/Home';
import AdminDashboard from "./PagesRouter/AdminDashboard"
import Login from './PagesRouter/Login';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
