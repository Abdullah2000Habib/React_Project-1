import React, { Component } from 'react'
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Index from "./components/Index"


import { BrowserRouter,Route, Routes } from 'react-router-dom';


class App extends Component  {

  render(){

  return (

<BrowserRouter >

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        
      </BrowserRouter>
  );
};
};
export default App;




