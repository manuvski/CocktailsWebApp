import { FC } from "react";
import {
  ButtonBoxes,
  WelcomeButton,
  WelcomeContainer,
  WelcomeMessage,
} from "./styles";

const Landing: FC = () => {
  return (
    <WelcomeContainer>
      <WelcomeMessage>Select the desired info</WelcomeMessage>
      <ButtonBoxes>
        <WelcomeButton to="/categories">Categories</WelcomeButton>
        <WelcomeButton to="/random">Get Random Cocktail!</WelcomeButton>
        <WelcomeButton to="/staff">Staff</WelcomeButton>
        <WelcomeButton to="/spells">Spells</WelcomeButton>
      </ButtonBoxes>
    </WelcomeContainer>
  );
};

export default Landing;
