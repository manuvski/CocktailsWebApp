import { getToken } from "../storage";
import {
  Category,
  CategoryInput,
  normalizeCategory,
} from "../../models/categories";
import { normalizeOrdinaryDrink, OrdinaryDrink } from "../../models/ordinarydrink";

export type OrdinaryDrinkResponse = {
  id: string;
  cocktail_id: number;
  cocktail_name: string;
  image: string;
  sub_cocktail_category_FK: string;
  createdAt: Date;
  updatedAt: Date;
};

  export const getOrdinaryDrinkById = async (
    id: string
  ): Promise<OrdinaryDrink | null> => {
    try {
      const token = getToken();
      const response = await fetch("http://localhost:8000/cocktails/4fdb952c-8622-440c-a05f-e2294ad2c863", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data: OrdinaryDrinkResponse = await response.json();
      return normalizeOrdinaryDrink(data);
    } catch (error) {
      console.log((error as Error).message);
    }
    return null;
  };

