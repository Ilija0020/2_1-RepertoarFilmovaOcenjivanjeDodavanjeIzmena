import React from "react";
import "./styles/main.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import AppInfo from "./components/pages/AppInfo";
import AuthorInfo from "./components/pages/AuthorInfo";



const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>

            <Route path="/about/" element={<About/>}>
              <Route path="app"  element={<AppInfo/>}/>
              <Route path="author" element={<AuthorInfo/>}/>
            </Route>
          </Routes>
        </div>
      <Footer/>
    
    </BrowserRouter>
  )
}

export default App;