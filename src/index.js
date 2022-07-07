import React, { Component }  from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrangChu from "./pages/trang-chu";
import NoPage from "./pages/NoPage";
import GioiThieu from "./pages/gioi-thieu";
import LienHe from "./pages/lien-he"
import PhuKienPhongTam from './pages/phu-kien-phong-tam';
import MacAo from './pages/mac-ao';
import TinTuc from "./pages/tin-tuc"
import SanPham from "./pages/san-pham"
import SanPhamMacAo from './pages/san-pham-mac-ao';
import TinTucNoiDung from './pages/tin-tuc-noi-dung';
import { Container } from "react-bootstrap";
import "./App.css"
import NavbarComponent from "./components/js/NavbarComponent"
import FooterComponent from "./components/js/FooterComponent"

export default function App() {
  return (
    
    <BrowserRouter>
        <NavbarComponent />
        <Routes className="">
              <Route path="/" element={<TrangChu />} />
              <Route path="/phu-kien-phong-tam" element={<PhuKienPhongTam />} />
              <Route path="/mac-ao" element={<MacAo />} />
              <Route path="/phu-kien-phong-tam/san-pham/:id" element={<SanPham />} />
              <Route path="/mac-ao/san-pham/:id" element={<SanPhamMacAo />} />
              <Route path="/gioi-thieu" element={<GioiThieu />} />
              <Route path="/lien-he" element={<LienHe />} />
              <Route path="/tin-tuc" element={<TinTuc />} />
              <Route path="/tin-tuc-noi-dung/:id" element={<TinTucNoiDung />} />
              <Route path="*" element={<NoPage />} />
        </Routes>    
        <FooterComponent />
        
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);