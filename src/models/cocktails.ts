import { CocktailResponse } from "../services/api/cocktails";

export type CocktailInput = {
  id: string;
  cocktail_id: number;
  cocktail_name: string;
  image: string;
  sub_cocktail_category_FK: string;
  createdAt: Date;
  updatedAt: Date;
};

export const normalizeCocktail = (input: CocktailResponse) => {
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

export type Cocktail = ReturnType<typeof normalizeCocktail>;
