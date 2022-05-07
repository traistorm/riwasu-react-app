import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { Container } from "react-bootstrap";
import "./App.css"
import NavbarComponent from "./components/NavbarComponent"


export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavbarComponent />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
        </Routes>
      </Container>
      
    </BrowserRouter>
  );
}