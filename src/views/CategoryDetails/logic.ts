import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Cocktail } from "../../models/cocktails";
import { getCategoryDrinksById } from "../../services/api/cocktails";

const useLogic = () => {

  const { id: categoryId } = useParams();
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation()

  const handleGetOrdinaryDrink = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const drinks = await getCategoryDrinksById(id);
      console.log(drinks);
      setCocktails(drinks);
      setTimeout(() => {
        setIsLoading(false)
      }, 3000);    }
  }, []);

  const goToBack = useCallback(() => {
    navigate("/categories", { replace: true });
  }, [navigate]);

  useEffect(() => {
    handleGetOrdinaryDrink(categoryId);
  }, [handleGetOrdinaryDrink, categoryId]);

    return{
      isloading,
     handleGetOrdinaryDrink,
     cocktails,
     categoryName:location.state.name,
     goToBack
    }
}

export default useLogic