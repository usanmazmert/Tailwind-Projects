import React from "react";
import Media from "./Common Components/Media";
import video from "../Assets/videos/Captain America Avengers Assemble Scene - Portal Scene - Avengers  Endgame (2019) Scene.mp4"

const Home = () => {
  return(
    <>
        <Media source = {video}/>
        {/* <Body />
        <Footer /> */}
    </>
  )
}

export default Home;