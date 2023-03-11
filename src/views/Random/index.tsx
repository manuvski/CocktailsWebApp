import { FC, memo } from "react";
import RandomCard from "../../components/RandomCard";
import useLogic from "./logic";
import {
  App,
  BackContainer,
  ButtonBack,
  Container,
  RandomButton,
} from "./styles";

const Random: FC = () => {
  const { randomCocktail, isloading, handleGetCocktail, goToBack } = useLogic();

  if (isloading) {
    return <h1>LOADING</h1>;
  }

  return (
    <App>
      {/* <ButtonBack onClick={goToBack}>Go Back!</ButtonBack> */}
      <RandomButton onClick={() => handleGetCocktail()}>
          ⇨ Click here and get a random drink ⇦
        </RandomButton>
      <BackContainer></BackContainer>
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
      </Container>
    </App>
  );
};

export default memo(Random);
