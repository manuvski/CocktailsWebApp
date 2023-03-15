import { FC, memo } from 'react';
import Card from '../../components/Card';
import useLogic from './logic';
import {
  App,
  BackContainer,
  ButtonBack,
  Container,
  SyncButton,
} from './styles';

const Categories: FC = () => {
  const { isloading, goToBack, syncData, categoryList, goToDetails } =
    useLogic();

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
            <Card
              id={category.id}
              categoryName={category.category}
              onClick={goToDetails}
            />
          </div>
        ))}
      </Container>
    </App>
  );
};

export default memo(Categories);
