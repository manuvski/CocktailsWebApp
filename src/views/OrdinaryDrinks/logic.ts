import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OrdinaryDrink } from "../../models/ordinarydrink";
import { getOrdinaryDrinkById } from "../../services/api/ordinaryDrinks";

const useLogic = () => {

    const { id: categoryId } = useParams();
    const [ordinaryDrink, setOrdinaryDrink] = useState<OrdinaryDrink | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
  

    const handleGetOrdinaryDrink = useCallback(async (id?: string) => {
      if (id) {
        setIsLoading(true);
        const ordinaryDrink = await getOrdinaryDrinkById(id);
        setOrdinaryDrink(ordinaryDrink);
        setIsLoading(false);
      }
    }, []);
    
    useEffect(() => {
      handleGetOrdinaryDrink(categoryId);
    }, [handleGetOrdinaryDrink, categoryId]);
  

    return{
      isLoading,
      ordinaryDrink
    }
}

export default useLogic