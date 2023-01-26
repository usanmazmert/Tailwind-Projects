import styled from "styled-components";

const NavbarStyled = styled.div`
    position:fixed;
    width: 100vw;
    z-index: 10;
    .sticky{
        background-color: black;
    }
    nav{
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        transition: all 0.5s;
        align-items: center;
        padding: 0.25vw 3vw;

    }
    .nav-center{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-header{
        display:flex;
        justify-content: space-between;
    }
    .nav-links{
        margin-left: 5vw;
        transition: all 0.5s;
        height: auto;
        padding: 0;
    }
    nav img{
        margin-top: 5px;
        max-width: 15vw;
    }
    nav ul{
        display:flex;
        align-items: center;
    }
    .nav-links li{
        list-style: none;
    }
    .nav-links a{
        text-decoration: none;
        text-transform: capitalize;
        margin: 1vw;
        font-size: 2vw;
        color: red;
        transition: all 0.5s 
    }
    .nav-links a:hover{
        color: #8b0000;
    }
    .burger{
        display:none
    }

    .burger div {
        margin: 2px;
        width: 2vw;
        height: 0.40vw;
        background-color: red;
        transition: all 0.5s
    }
    .clicked .burger-1{
        transform: rotate(-45deg) translate(-7px, 6px)
    }
    .clicked .burger-2{
        opacity: 0;
    }
    .clicked .burger-3{
        transform: rotate(45deg) translate(-6px,6px)
    }
    .searchBar{
        display: flex;
        margin-top: 5px;
        font-size: 2vw;
        font-weight: 500;
        padding: 1rem;
        color: red;
        transition: all 0.5s;
    }
    .searchInput{
        display:block;
        background-color: transparent;
        color: red;
        transition: all 0.5s;
        width:0;
        visibility:hidden;
    }
    .opened .searchInput{
        border: 2px solid red;
        border-left: none;
        border-radius: 0 30px 30px 0;
        border-color: red;
        visibility: visible;
        width: 20vw;
    }
    .opened .searchInput:focus{
        outline:none;
    }
    .icon{
        border-radius:30px;
        border: 2px solid red;
        cursor: pointer;
        transition: all 0.5s;
        min-height: 22px;
        min-width: 22px;
    }
    .opened .icon{
        border-radius:30px 0 0 30px;
        border-right: none;
    }

    @media screen and (max-width: 720px){
        nav{
            display: block;
            padding: 0
        }
        .nav-header{
            padding: 1vw 4vw;
        }
        .nav-center{
            display:block;
        }
        .nav-links{
            height: 0;
            overflow: hidden;
        }
        .nav-links ul{
            display: block;
            padding:0;
        }
        .nav-links a:hover{
            padding-left: 0.5rem;
        }
        .burger{
            display: block;
            cursor: pointer;
        }
        .searchBar{
            display: none;
        }
    }
`
export default NavbarStyled;