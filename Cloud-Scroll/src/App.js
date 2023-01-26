import { useEffect, useState } from "react";
import About from "./components/About";
import AllnOne from "./components/AllnOne";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";


function App() {
  const [offSet, setOffSet] = useState(0)
  useEffect(() => {
    setOffSet(document.getElementById("navbar").getBoundingClientRect().height)
  }, [])
  return (
    <>
      <Navbar />
      <Hero offSet={offSet}/>
      <About/>
      <Support/>
      <AllnOne/>
      <Pricing/>
      <Footer/>
    </>
  );
}

export default App;
