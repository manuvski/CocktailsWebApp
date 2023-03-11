import { getToken } from "../storage";
import { Cocktail, normalizeCocktail } from "../../models/cocktails";
import { normalizeRandom } from "../../models/random";

export type CocktailResponse = {
  id: string;
  cocktail_id: number;
  cocktail_name: string;
  image: string;
  sub_cocktail_category_FK: string;
  createdAt: Date;
  updatedAt: Date;
};

export type RandomResponse = {
  cocktail_id: number;
  cocktail_name: string;
  category: string;
  isAlcoholic: string;
  description: string;
  instrucctions: {
    de: string;
    it: string;
  };
  image: string;
  ingredients: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
};

export const getCategoryDrinksById = async (
  id: string
): Promise<Cocktail[]> => {
  try {
    const token = getToken();
    const response = await fetch(`http://localhost:8000/cocktails/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: CocktailResponse[] = await response.json();
    console.log({ data });
    return data.map(normalizeCocktail);
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const getRandomCocktail = async () => {
  try {
    const token = getToken();
    const response = await fetch("http://localhost:8000/cocktails" ,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: RandomResponse[] = await response.json();
    return data.map(normalizeRandom);
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};
