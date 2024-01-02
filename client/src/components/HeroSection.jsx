import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({myData}) => {
    const name = myData.name
    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-two-column">
                    <div className="jero-section-data">
                        <div className="intro-data">Ласкаво просимо до</div>
                        <h1>{name}</h1>
                        <p>              
                            Вітаємо у світі справжнього задоволення кавою! У нашому інтернет-магазині SuperCoffee ви знайдете найкращі види кави з усього світу, які призначені задовольнити навіть найвибагливіших любителів цього ароматного напою.
                        </p>
                        <br/>

                        <p>
                            Наш асортимент включає ексклюзивні види кави, вибір якої ми здійснюємо з великою увагою до якості та смакових особливостей. Ми працюємо тільки з провідними кавоварнями та постачальниками, щоб гарантувати вам лише найкращі продукти.
                        </p>
                        <br/>
                        <p>
                            Обирайте SuperCoffee – ваш провідний провідник у світі смачної кави. Замовляйте прямо зараз та насолоджуйтеся кожним ковзанням ароматного нектару, який ми привозимо для вас з усього світу.
                        </p>
                        <br/>

                        <NavLink to="/products">
                            <Button>Перейти до меню</Button>
                        </NavLink>
                    </div>

                    <div className="hero-section-image">
                        <figure>
                            <img 
                            src="./images/coffee.jpeg" 
                            alt="hero-section" 
                            className="img-style"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 12rem 0 8rem 0;

    img {
    min-width: 10rem;
    height: 10rem;
    }

    .hero-section-data {
    p {
        margin: 2rem 0;
    }

    h1 {
        text-transform: capitalize;
        font-weight: bold;
    }

    .intro-data {
        margin-bottom: 0;
    }
    }

    .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    figure {
    position: relative;

    &::after {
        content: "";
        width: 60%;
        height: 80%;
        background-color: rgba(196,153,82, 0.4);
        position: absolute;
        left: 50%;
        top: -5rem;
        z-index: -1;
    }
    }
    .img-style {
    width: 80%;
    height: auto;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
        gap: 10rem;
    }

    figure::after {
        content: "";
        width: 50%;
        height: 100%;
        left: 0;
        top: 10%;
        /* bottom: 10%; */
        background-color: rgba(196,153,82, 0.4);
    }
    }
`;

export default HeroSection;