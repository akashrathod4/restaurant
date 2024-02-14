import React from "react";
import "./Style.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <hr
        style={{
          background: "#fff",
          height: "3px",
          width: "100%",
          
               }} />
      <About />
      <hr
        style={{
          background: "#fff",
          height: "3px",
          width: "100%",
          
               }} />
      <Menu />

      <hr
        style={{
          background: "#fff",
          height: "3px",
          width: "100%",
          
               }} />
      <Product />

      <hr
        style={{
          background: "#fff",
          height: "3px",
          width: "100%",
          
               }} />


      <Review />
      <hr
        style={{
          background: "#fff",
          height: "3px",
          width: "100%",
          
               }} />
      <Contact />
  
    
      <Footer />
    </>
  )
};

export default App;

