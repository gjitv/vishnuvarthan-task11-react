import React from "react";
import { SignIn } from "./Components/Login";

import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";


const App = () => {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/"  element={<Main/>}/>
        <Route path="/signup" element={<SignIn/>}/>  
        <Route path="/cart" element={<Cart/>}/>     
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
