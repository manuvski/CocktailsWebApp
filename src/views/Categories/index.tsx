import { FC, memo } from 'react';
import Card from '../../components/Card';
import useLogic from './logic';
import {
  BackContainer,
  ButtonBack,
  Container,
  GeneralContainer,
} from './styles';

const Categories: FC = () => {
  const { isloading, goToBack, categoryList, goToDetails } = useLogic();

  if (isloading) {
    return <h1>LOADING</h1>;
  }

  return (
    <GeneralContainer>
      <BackContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </BackContainer>
      {/* <SyncButton onClick={syncData}>Sync Categories</SyncButton> */}
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
    </GeneralContainer>
  );
};

export default memo(Categories);
