import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Category } from "../../models/categories";
import { getCategories, syncCategories } from "../../services/api/categories";

const useLogic = () => {

  const [categoryList, setCategoryList] = useState<Category[]>([]);
   const [page, setPage] = useState(1);
   const [isloading, setIsLoading] = useState<boolean>(false);
   const { id: categoryId } = useParams();


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

  useEffect(() => {
    getCategoriesList();
  }, [getCategoriesList]);

  const goToBack = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

  const goToDetails = useCallback(() => {
    navigate(`/categories/${categoryId}`, { replace: true });
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
      syncData,
      categoryList,
       goToDetails
    }
}

export default useLogic