import { ReactNode } from "react";

export type Props = {
  // type?: 'list' | 'details'
  onClick?: (id: string) => void;
  onClick2?: (id: string) => void;
  // children?: ReactNode
 
  email?: string;
  id?: string;
};