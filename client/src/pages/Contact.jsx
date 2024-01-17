/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {

  const url = "https://www.instagram.com/";
  const handleButtonClick = () => {
    window.location.href = url;
  };
  return (
    <Wrapper>
      <h2 className="common-heading">Контакти</h2>
      <div className="instagram">
        <div>
          <div>
            <BsInstagram className="icon" />
            <h3>Наш інстаграм</h3>
          </div>
            <Button onClick={handleButtonClick}>Перейти</Button>
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  .instagram {
    width: auto;
    height: 10rem;
    margin: 5%;
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-content: center;
    ${'' /* background: ${({ theme }) => theme.colors.bg}; */}
    background: rgba(255,255,255,0.1);
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        ${'' /* gap: 1rem; */}

        div {
          gap:1.5rem;
        }
        }
  }

  h3 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  .icon {
    /* font-size: rem; */
    width: 6rem;
    height: 6rem;


    color: #c49952;
    }


`;

export default Contact;
