import { CocktailResponse } from '../services/api/cocktails';

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
    id: input?.id || '',
    name: input?.cocktail_name || '',
    image: input?.image || '',
    createdAt: input?.createdAt || Date(),
    updatedAt: input?.updatedAt || Date(),
  };
};

export type Cocktail = ReturnType<typeof normalizeCocktail>;
