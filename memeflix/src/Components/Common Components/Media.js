import React from "react";
import MediaStyled from "../Styled/Media.styled";
const Media = (props) => {
    
    
    return(
        <MediaStyled>
            <video autoPlay muted>
                <source src={props.source} type="video/mp4"/>
            </video>
        </MediaStyled>
    )
}

export default Media;