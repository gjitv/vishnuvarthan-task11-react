import React from "react";
import { SignIn } from "./Components/Login";

import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Admin from "./Components/Admin/Admin";

const App = () => {
  return (
    <BrowserRouter>  
      {/* <Routes>
        <Route path="/"  element={<Main/>}/>
        <Route path="/signup" element={<SignIn/>}/>  
        <Route path="/cart" element={<Cart/>}/>     
      </Routes> */}
      <Admin/>
    </BrowserRouter>
  );
};

export default App;
