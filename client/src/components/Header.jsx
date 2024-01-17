import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Nav from "./nav/Nav";
import "./stars.scss"


const Header = () => {
    const navigate = useNavigate(); 

    return (
        <MainHeader>

            <img className="logo" src="./images/logo.jpeg" alt="SuperCoffee logo" onClick={() => navigate("/")}/>

            <div className="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
            <Nav/>
        </MainHeader>
    )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 8rem;
    background-color: ${({theme}) => theme.colors.bg };
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
        height: 6rem;
        border: 3px solid black;
        border-radius: 50%;
    }

`;

export default Header;