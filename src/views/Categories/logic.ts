import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../../models/categories";
import { getCategories, syncCategories } from "../../services/api/categories";

const useLogic = () => {

  const [categoryList, setCategoryList] = useState<Category[]>([]);
   const [page, setPage] = useState(1);
   const [isloading, setIsLoading] = useState<boolean>(false);

   const navigate = useNavigate();

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

    return{
      isloading,
      goToBack,
      handleNextPage,
      handlePrevPage,
      syncData,
      categoryList
    }
}

export default useLogic