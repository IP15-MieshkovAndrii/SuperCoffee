import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: "lowest",
    filters: {
        text: "",
        category: "все",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
}


export const FilterProvider = ({children}) => {

    const {products} = useProductContext();
    const[state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({type:"SET_GRID_VIEW"})
    }
    const setListView = () => {
        return dispatch({type:"SET_LIST_VIEW"})
    }
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
      };
    const updateFilterValue = async (event) => {

        try {
            let name = event.target.name;
            let value = event.target.value;

            if (value) value.toLowerCase();

            return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
          } catch (error) {
            console.error('Error posting action and updating filters:', error);
          }
    };
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
      };

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, state.sortingValue, state.filters]);


    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});
    }, [products])

    return(
        <FilterContext.Provider value={{
                ...state,
                setGridView,
                setListView,
                sorting,
                updateFilterValue,
                clearFilters
            }}>
            {children}
        </FilterContext.Provider>
    ) ;
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};