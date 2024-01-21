import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About  from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Callback from "./pages/Callback";
import Login from "./pages/Sign/Login.jsx";
import Register from "./pages/Sign/Register.jsx";

const App = () => {

  const theme = {
    colors: {

      text: "rgb(255,255,255)",
      heading: "rgba(196,153,82, 1)",
      white: "#fff",
      black: "#212529",
      helper: "#c49952",

      bg: "rgb(72, 54, 54)",
      bgS: "rgb(106, 80, 80)",
      footer_bg: "#0a1435",
      btn: "rgba(98, 84, 243, 0.5)",
      border: "rgba(98,84,243,0.5)",
      hr: "#fff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.3) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    }
  };


  return (
    <ThemeProvider theme={theme} >
      <Router>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/callback" element={<Callback/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  )

};

export default App;
