import React, {useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import data from "./data";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home";
function App() {
  const categories = data.reduce((list, item) => {
    // console.log(list)
    if(!list.includes(item.category)){
      list.push(item.category);
    }
    return list;
  }, ["home"])

  return (
    <>
      <Router>
      <Navbar categories = {categories}/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          {/* <Route path="/films">
            <Home />
          </Route>
          <Route path="/series">
            <Home />
          </Route>
          <Route path="/documentaries">
            <Home />
          </Route>
          <Route path = "*">
            <Error/>
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
