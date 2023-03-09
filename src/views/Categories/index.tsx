import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { Category } from "../../models/categories";
import { getCategories, syncCategories } from "../../services/api/categories";
import {
  App,
  BackContainer,
  ButtonBack,
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  DeleteButton,
  SyncButton,
} from "./styles";

const Categories: FC = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const navigate = useNavigate();
   const [isloading, setIsLoading] = useState<boolean>(false);
   const [page, setPage] = useState(1);

  const getCategoriesList = useCallback(async () => {
    const categories = await getCategories();
    console.log('categories', categories)
    setCategoryList(categories);
  }, []);

  const syncData = useCallback(async () => {
    await syncCategories();
    setIsLoading(false);
    getCategoriesList();
  }, []);

  // const handleRemoveCharacter = useCallback(async (id: string) => {
  //   setIsLoading(true);
  //   await removeCharacter(id);
  //   setCharacterList((prev) => prev.filter((item) => item.id !== id));
  //   setIsLoading(false);
  // }, []);

  useEffect(() => {
    getCategoriesList();
  }, [getCategoriesList]);


  const goToBack = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

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
                category={category.category}
              />
               </div>
          ))}
      
    </Container>
   </App>
  );
};

export default memo(Categories);
