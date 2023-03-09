import { FC, memo } from "react";
import Card from "../../components/Card";
import useLogic from "./logic";
import {
  App,
  BackContainer,
  ButtonBack,
  Container,
  SyncButton,
} from "./styles";

const OrdinaryDrinks: FC = () => {
  const {
    isloading,
    goToBack,
    handleNextPage,
    handlePrevPage,
    syncData,
    categoryList,
  } = useLogic();

  if (isloading) {
    return <h1>LOADING</h1>;
  }
  return (
    <App>
      <BackContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </BackContainer>
      <SyncButton onClick={syncData}>Sync Categories</SyncButton>
      <Container>
        {categoryList.map((category, index) => (
          <div key={index}>
            <Card id={category.id} category={category.category} />
          </div>
        ))}
      </Container>
    </App>
  );
};

export default memo(OrdinaryDrinks);
