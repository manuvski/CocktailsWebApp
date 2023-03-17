import { FC, memo } from "react";
import RandomCard from "../../components/RandomCard";
import useLogic from "./logic";
import {
  AnimatedButton,
  GeneralContainer,
  BackContainer,
  ButtonBack,
  Container,
} from "./styles";

const Random: FC = () => {
  const { randomCocktail, isloading, handleGetCocktail, goToBack } = useLogic();

  if (isloading) {
    return <h1>LOADING</h1>;
  }

  return (
    <GeneralContainer>
      <BackContainer>
      <ButtonBack onClick={goToBack}>Go Back</ButtonBack>
      </BackContainer>
      <AnimatedButton onClick={() => handleGetCocktail()}>
      👉 Click 'HERE' and get a random drink 👈
        </AnimatedButton>
      <Container>
        {randomCocktail.map((cocktail, index) => (
          <div key={index}>
            <RandomCard
              image={cocktail.image}
              name={cocktail.name}
              category={cocktail.category}
              isAlcoholic={cocktail.isAlcoholic}
              description={cocktail.description}
            />
          </div>
        ))}
      </Container>
    </GeneralContainer>
  );
};

export default memo(Random);
