import "./App.css";
import React from 'react'
import { Navbar } from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div> 
      <div className="bg-slate-900">
      <Navbar/>
      </div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>

      </Routes>
      
      
  </div>
  )
}





// //Love Babbar code
// import { Routes } from "react-router-dom";
// import Navbar from "./components/Navbar"
// import { Route } from "react-router-dom";
// import Home from "./pages/Home"
// import Cart from "./pages/Cart"

// const App = () => {
//   return (<div>
//         <div className="bg-slate-900">
//           <Navbar/>
//         </div>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/cart" element={<Cart/>} />
//         </Routes>
//   </div>)
// };

// export default App;

