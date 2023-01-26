import React, {useState, useRef} from "react";
import {BiSearch} from "react-icons/bi"
import NavbarStyled from "./Styled/Navbar.styled"
import logo from "../Assets/images/logo.png";
import { useEffect } from "react";
import { useCallback } from "react";
import { isOptionGroup } from "@mui/base";

const Navbar = (props) => {
    const [sticky, setSticky] = useState(false)
    const [searchValue, setValue] = useState("");
    const [searchOpen, setOpen] = useState(false);
    const [isToggle, setToggle] = useState(false);
    const [windowWidth, setWidth] = useState(window.innerWidth);
    const containerRef = useRef(null)
    const linksRef = useRef(null)
    const searchRef = useRef(null)
    const categories = props.categories;

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSearch = () => {
        setOpen(!searchOpen)
    }
    const handleToggle = useCallback(() => {
        setToggle(!isToggle)
    })
    useEffect(() => {
        if(windowWidth > 720){
            containerRef.current.style.height = "auto"
            return;
        }
        const height = linksRef.current.getBoundingClientRect().height;
        if(isToggle)
            containerRef.current.style.height = `${height}px`;
        else
            containerRef.current.style.height = "0px"
    },[isToggle, windowWidth])
    useEffect(() => {
            window.addEventListener("resize", function(){
                setWidth(window.innerWidth)
            })
            window.addEventListener("scroll", function(){
                if(this.scrollY === 0){
                    setSticky(false)
                }else if(this.scrollY > 0 && !sticky){
                    setSticky(true);
                }
            })
        }, [])
    return (
        <>
        <NavbarStyled>
            <nav className={sticky ? "sticky" : undefined}>
                <div className = "nav-center">
                    <div className= "nav-header">
                        <img src = {logo} alt = "logo"/>
                        <div className={isToggle ? "burger clicked" : "burger"} onClick={handleToggle}>
                            <div className = "burger-1"/>
                            <div className = "burger-2"/>
                            <div className = "burger-3"/>
                        </div>
                    </div>
                    <div className="nav-links" ref = {containerRef}>
                        <ul ref = {linksRef}>
                            {categories.map((item, index) => {
                                return(<li key={index}><a href="#">{item}</a></li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div className={`${searchOpen && "opened"} searchBar`} ref = {searchRef}>
                    <BiSearch className="icon" onClick={handleSearch}/>
                    <input value = {searchValue} onChange={handleChange} className = "searchInput" type="text"></input>
                </div>
            </nav>
        </NavbarStyled>
        </>
    )
}

export default Navbar