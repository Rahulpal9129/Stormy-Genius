import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Podcust from "./pages/podcust/Podcust";
import Navbar from "./conponents/navbar/Navbar";
import Content from "./pages/Content/Content";
import Footer from "./conponents/footer/Footer";
import Input from "./conponents/input/Input";
import ContentDetiail from "./pages/contentDetail/ContentDetiail";



function App() {
  const isLoaction=useLocation();
  const isInput=isLoaction.pathname==="/Content";
  return (
    <>
     {isInput? <Input/>: <Navbar />}
      {/* <Input/>
      <Navbar /> */}
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/Podcust" element={<Podcust />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/ContentDetail/:id" element={<ContentDetiail />} />

        
      </Routes>
         <Footer/>
        
      
      

      
    </>
  );
}

export default App;
