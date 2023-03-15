import { FC } from 'react';
import { Container, Description, ImageContainer } from './styles';
import { Props } from './types';

const RandomCard: FC<Props> = ({
  image,
  name,
  category,
  isAlcoholic,
  description,
  // instrucctions,
  // ingredients,
}) => {
  return (
    <Container>
      <ImageContainer src={image} />
      <Description> {name} </Description>
      <Description> Category drink → {category} </Description>
      <Description> {isAlcoholic} </Description>
      <Description> {description} </Description>
      {/* <Description> {instrucctions} </Description>
      <Description> {ingredients} </Description> */}
    </Container>
  );
};

export default RandomCard;
