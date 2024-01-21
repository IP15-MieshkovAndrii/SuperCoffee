import React from "react";
import RecProducts from "../components/RecProducts";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";


const Home = () => {
    const data = {
        name: "SuperCoffee",
    }
    return (
        <>
            <HeroSection myData={data}/>
            <RecProducts />
            <Services/>

        </>
    )
}



export default Home;