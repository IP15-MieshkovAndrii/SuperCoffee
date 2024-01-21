import React, { useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaCoffee } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cartContext";
import {signOut } from "firebase/auth";
import { auth, useAuthState } from "../config/firebase";
import { Button } from "../styles/Button";


const Nav = () => {
    const [menuIcon, setMenuIcon] = useState();
    const { totalItem } = useCartContext();

    const navigate = useNavigate();
  
    const { isAuthenticated } = useAuthState();

    const logout = async () => {
      await signOut(auth);
    };

    return (
      <Navbar>
        <div className={menuIcon ? "navbar active" : "navbar"}>
          <ul className="navbar-lists">
            <li>
              <NavLink
                to="/"
                className="navbar-link "
                onClick={() => setMenuIcon(false)}>
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="navbar-link "
                onClick={() => setMenuIcon(false)}>
                Про нас
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="navbar-link "
                onClick={() => setMenuIcon(false)}>
                Меню
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="navbar-link "
                onClick={() => setMenuIcon(false)}>
                Контакти
              </NavLink>
            </li>

            <li>
                {isAuthenticated ? (
                <Button onClick={logout}>Logout</Button>
              ) : (
                <Button onClick={() => navigate("/login")}>Login</Button>
              )}
            </li>

            <li>
              <NavLink to="/cart" className="navbar-link cart-trolley--link">
                <FaCoffee className="cart-trolley" />
                <span className="cart-total--item">{totalItem}</span>
              </NavLink>
            </li>
          </ul>
  

          <div className="mobile-navbar-btn">
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
            <CgClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          </div>
        </div>
      </Navbar>
    );
  };
  
  const Navbar = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: #fff;
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  .user-login--name {
    text-transform: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: #fff;

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: #fff;
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: #000;
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255,255,255, 0.8);

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      transition: all 3s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 3s linear;

      .navbar-link {
        font-size: 4.2rem;
        color: #000;
      }
    }
    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;

export default Nav;