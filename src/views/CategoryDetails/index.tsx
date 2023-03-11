import { FC, Fragment, memo, useCallback, useEffect, useState } from "react";
import { App, Container } from "./styles";
import useLogic from "./logic";
import { BackContainer, SyncButton } from "../Categories/styles";
import CategoryCard from "../../components/CategoryCard";

const CategoryDetails: FC = () => {
  const {
    isLoading,
    cocktails,
    categoryName
  } = useLogic()
  

  if (isLoading) {
    return <p>LOADING</p>;
  }
console.log(categoryName)
  return (
    <App>
      <BackContainer></BackContainer>
      
      <Container>
      <div>{categoryName}</div>
        {cocktails.map((cocktail) => (
          <Fragment key={cocktail.id}>
            <CategoryCard
              id={cocktail.id}
              name={cocktail.name}
              image={cocktail.image}
            />
          </Fragment>
        ))}
      </Container>
    </App>
  );
};

export default memo(CategoryDetails);
