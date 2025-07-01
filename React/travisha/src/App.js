import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import NotFound from "./Website/Pages/NotFound";
import Feature from "./Website/Pages/Feature";
import Countries from "./Website/Pages/Countries";
import Testimonial from "./Website/Pages/Testimonial";
import Contact from "./Website/Pages/Contact";
import Triaining from "./Website/Pages/Triaining";
import Dashboard from "./Admin/Apages/Dashboard";
import ServiceManage from "./Admin/Apages/ServiceManage";
import TriningManage from "./Admin/Apages/TriningManage";
import ServiceAdd from "./Admin/Apages/ServiceAdd";
import { ToastContainer } from 'react-toastify';
import Alogin from "./Admin/Apages/Alogin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/test" element={<Testimonial />} />
          <Route path="/trian" element={<Triaining />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="*" element={<NotFound />} />

        {/* admin path */}
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/serviceManage" element={<ServiceManage />} />
          <Route path="/triningManage" element={<TriningManage />} />
          <Route path="/serviceadd" element={<ServiceAdd />} />
          <Route path="/alogin" element={<Alogin />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
