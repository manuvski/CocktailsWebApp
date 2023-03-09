import { getToken } from "../storage";
import {
  Category,
  CategoryInput,
  normalizeCategory,
} from "../../models/categories";
import { normalizeOrdinaryDrink, OrdinaryDrink } from "../../models/ordinarydrink";
import { Cocktail, normalizeCocktail } from "../../models/cocktails";

export type CocktailResponse = {
  id: string;
  cocktail_id: number;
  cocktail_name: string;
  image: string;
  sub_cocktail_category_FK: string;
  createdAt: Date;
  updatedAt: Date;
};
  export const getCocktailById = async (
    id: string
  ): Promise<Cocktail | null> => {
    try {
      const token = getToken();
      const response = await fetch("http://localhost:8000/cocktails/dad18372-c9e9-4f25-be8b-3b995817c922", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data: CocktailResponse = await response.json();
      return normalizeCocktail(data);
    } catch (error) {
      console.log((error as Error).message);
    }
    return null;
  };

