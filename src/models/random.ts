import { RandomResponse } from "../services/api/cocktails";

export type RandomInput = {
  image: string;
  cocktail_id: number;
  cocktail_name: string;
  category: string;
  isAlcoholic: string;
  description: string;
  instrucctions: {
    de: string;
    it: string;
  };
  ingredients: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
};

export const normalizeRandom = (input: RandomResponse) => {
  return {
    image: input?.image || "",
    name: input?.cocktail_name || "",
    category: input?.category || "",
    isAlcoholic: input?.isAlcoholic || "",
    description: input?.description || "",
    instrucctions: {
      de: input?.instrucctions.de || "",
      it: input?.instrucctions.it || "",
    },
    ingredients: {
      one: input?.ingredients.one || "",
      two: input?.ingredients.two || "",
      three: input?.ingredients.three || "",
      four: input?.ingredients.four || "",
    },
  };
};

export type Random = ReturnType<typeof normalizeRandom>;
