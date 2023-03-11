import { FC, Fragment, memo, useState } from "react"
import RandomCard from "../../components/RandomCard";
import useLogic from "./logic";
import { App, BackContainer, ButtonBack, Container, RandomButton } from "./styles";

const Random:FC = () => {

    const {
        randomCocktail,
        isloading,
        handleGetCocktail,
        goToBack
      } = useLogic();

    if (isloading) {
        return <h1>LOADING</h1>;
      }

    return(
        <App>
        <BackContainer>
          <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
        </BackContainer>
        <Container>
        {randomCocktail.map((cocktail, index) => (
          <div key={index}>
            <RandomCard
             image={cocktail.image} 
             name={cocktail.name}
             category={cocktail.category}
             isAlcoholic={cocktail.isAlcoholic}
             description={cocktail.description}
            //  instrucctions={cocktail.instrucctions}
            //  ingredients={cocktail.ingredients}
             />
          </div>
        ))}
        <RandomButton onClick={() => handleGetCocktail()}>
           Random 
         </RandomButton>
      </Container>
        </App>

    )
}

export default memo(Random)