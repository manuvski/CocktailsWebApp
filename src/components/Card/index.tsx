import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Description, DetailsButton, EditButton } from "./styles";
import { Props } from "./types";

const Card: FC<Props> = ({ id, categoryName }) => {
  const navigate = useNavigate();

  const goToDetails = useCallback(() => {
    navigate(`/categories/${id}`, { replace: true, state:{name:categoryName} });
  }, [navigate]);

  return (
    <Container>
      <Description> ID: {id} </Description>
      <Description> {categoryName} </Description>
      <DetailsButton onClick={goToDetails}>Go to {categoryName}:</DetailsButton>
    </Container>
  );
};

export default Card;
