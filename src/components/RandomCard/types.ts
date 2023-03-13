import { ReactNode } from "react";

export type Props = {
  onClick?: (id: string) => void;
  image: string;
  name: string;
  category:string,
  isAlcoholic:string,
  description:string
  // instrucctions:string,
  // ingredients: string;
};
