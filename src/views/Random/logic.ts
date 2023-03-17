import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Random } from "../../models/random";
import { getRandomCocktail } from "../../services/api/cocktails";   

const useLogic = () => {
    const [randomCocktail, setRandomCocktail] = useState<Random[]>([]);
    const [isloading] = useState<boolean>(false);
    const navigate=useNavigate()

    const goToBack = useCallback(() => {
        navigate("/landing", { replace: true });
      }, [navigate]);

    const handleGetCocktail = useCallback(async () => {
        const cocktail = await getRandomCocktail();
        console.log('cocktail', cocktail)
        setRandomCocktail(cocktail);
      }, []);


    return{
        randomCocktail,
        isloading,
        handleGetCocktail,
        goToBack
    }
}
export default useLogic