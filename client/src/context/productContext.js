import { createContext, useContext, useEffect, useReducer} from "react";
import { commerce } from "../lib/commerce";
import reducer from "../reducer/productReducer"
// import { postRecommendations } from "../api/actions";
// import { useAuthState } from "../config/firebase";

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading: false,
    singleProduct: {},
    recommendations: []
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const { uid, isAuthenticated } = useAuthState();


    const fetchProducts = async() => {
        dispatch({type:"SET_LOADING"})
        try {
            const {data} = await commerce.products.list();

            dispatch({type:"SET_API_DATA", payload: data})
            // await fetchRecs(data);
        } catch {
            dispatch({type:"API_ERROR"})
        }
    };

    // const fetchRecs = async(data) => {
    //     dispatch({type:"SET_LOADING"})
    //     try {
    //         console.log(isAuthenticated)
    //         if(isAuthenticated) {
    //             const recs = postRecommendations({user_id: uid, products:data })
    //             dispatch({type:"SET_RECS_DATA", payload: recs})
    //         } else 

    //     } catch {
    //         dispatch({type:"API_ERROR"})
    //     }
    // };


    const getSingleProduct = async(id) => {
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const {data} = await commerce.products.list();
            const singleProduct = data.find(product => product.id === id);
            dispatch({type:"SET_SINGLE_PRODUCT", payload: singleProduct});
        } catch (error) {
            dispatch({type:"SET_SINGLE_ERROR"})
        }
    }
    
    useEffect(() => {
        fetchProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return(
        <AppContext.Provider value={{...state, getSingleProduct}}>
            {children}
        </AppContext.Provider>
    )

};

const useProductContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext, useProductContext};
