import type { OrdinaryDrinkResponse } from "../services/api/ordinaryDrinks";

export type OrdinaryDrinkInput = {
  id: string;
  cocktail_id: number;
  cocktail_name: string;
  image: string;
  sub_cocktail_category_FK: string;
  createdAt: Date;
  updatedAt: Date;
};

export const normalizeOrdinaryDrink = (input: OrdinaryDrinkResponse) => {
  return {
    id: input?.id || "",
    cocktail_id: input?.cocktail_id || "",
    cocktail_name: input?.cocktail_name || "",
    image: input?.image || "",
    sub_cocktail_category_FK: input?.sub_cocktail_category_FK || "",
    createdAt: input?.createdAt || Date(),
    updatedAt: input?.updatedAt || Date(),
  };
};

export type OrdinaryDrink = ReturnType<typeof normalizeOrdinaryDrink>;
