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
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


const Random: FC = () => {
  const { randomCocktail, isloading, handleGetCocktail, goToBack } = useLogic();

  if (isloading) {
    return (
      <Stack sx={{ width: '50%', color: 'grey.500', marginTop:'10rem',margin:'0 auto' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
    )
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
