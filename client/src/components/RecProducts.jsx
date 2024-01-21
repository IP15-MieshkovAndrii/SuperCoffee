import { useProductContext } from "../context/productContext";
import styled from "styled-components";
import Product from "./Product";
import { useAuthState } from "../config/firebase";
import { postRecommendations } from "../api/actions";
import { useEffect, useState } from "react";


const RecProducts = () => {
  const { isLoading, products } = useProductContext();
  const { uid, isAuthenticated } = useAuthState();
  const [recs, setRecs] = useState('');


  useEffect(() => {

    async function getRecs(uid, isAuthenticated, products) {
      try {
    
        if(isAuthenticated){
          const recs = await postRecommendations({ user_id: uid, products: products});

          if (Array.isArray(recs)){
            setRecs(recs)
          }
        } else {
          const recs = await postRecommendations({ user_id: "", products: products});

          if (Array.isArray(recs)){
            setRecs(recs)
          }
        }
    ;
      } catch (error) {
        console.error('Error performing action and navigating:', error);
      }
    };

    if(!isLoading)getRecs(uid, isAuthenticated, products)



  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])


  if (isLoading || !(Array.isArray(recs) && recs.length)) {
    return <div> ......Loading </div>;
  }

  let selectedProducts = recs;


 
  return (
    <WrapperRecs className="section">
      <div className="container">
        <div className="intro-data">Спробуй!</div>
        <div className="common-heading">Рекомендуємо</div>
        <div className="grid grid-three-column">
          {selectedProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </WrapperRecs>
  );
};

const WrapperRecs = styled.section`
  margin: 0 0 4rem 0;
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid black;

  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    border-radius: 1rem 1rem 0 0;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;

    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.footer_bg};
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: ${({ theme }) => theme.colors.bgS};;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
      border-radius:0 0 1rem 1rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.white};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default RecProducts;