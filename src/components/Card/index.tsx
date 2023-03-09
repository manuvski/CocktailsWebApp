import { FC } from "react";
import {
  Container,
  Description,
} from "./styles";
import { Props } from "./types";

const Card: FC<Props> = ({
id,
category
}) => {
  return (
   <Container>
    <Description> ID: {id} </Description>
    <Description> {category} </Description>

   </Container>
  );
};

export default Card;
