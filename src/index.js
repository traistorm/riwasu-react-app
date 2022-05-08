import React, { Component }  from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrangChu from "./pages/trang-chu";
import NoPage from "./pages/NoPage";
import GioiThieu from "./pages/gioi-thieu";
import LienHe from "./pages/lien-he"
import PhuKienPhongTam from './pages/phu-kien-phong-tam';
import MacAo from './pages/mac-ao';
import { Container } from "react-bootstrap";
import "./App.css"
import NavbarComponent from "./components/js/NavbarComponent"
import FooterComponent from "./components/js/FooterComponent"

export default function App() {
  return (
    <BrowserRouter>
        <NavbarComponent />
        <Routes>
              <Route path="/" element={<TrangChu />} />
              <Route path="/phu-kien-phong-tam" element={<PhuKienPhongTam />} />
              <Route path="/mac-ao" element={<MacAo />} />
              <Route path="/gioi-thieu" element={<GioiThieu />} />
              <Route path="/lien-he" element={<LienHe />} />
              <Route path="*" element={<NoPage />} />
        </Routes>    
        <FooterComponent />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);