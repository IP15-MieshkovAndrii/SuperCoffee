import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productContext";
import { FilterProvider } from "./context/filterContext";
import { CartProvider } from "./context/cartContext";
import { CheckoutProvider } from "./context/checkoutConrext"
import { AuthContextProvider } from "./config/firebase";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

        <AppProvider>
            <AuthContextProvider>
                <FilterProvider>
                    <CartProvider>
                        <CheckoutProvider></CheckoutProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </AuthContextProvider>
        </AppProvider>

);


reportWebVitals();
