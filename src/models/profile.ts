import type { FavoritesResponse } from "../services/api/profile";
import { normalizeCharacter } from "./character";
import { normalizeSpells } from "./spells";
import { normalizeStaff } from "./staff";
import { normalizeStudent } from "./students";

export type ProfileInput = {
  password: string;
  email: string;
};

export const normalizeUser = (input: any) => {
  return {
    id: (input?.id || "") as string,
    email: (input?.email || "") as string,
  };
};

export const normalizeUserFavorites = (input: FavoritesResponse) => ({
  characters: input.favorites.map(normalizeCharacter),
  spells: input.favoritesSpells.map(normalizeSpells),
  staff: input.favoritesStaff.map(normalizeStaff),
  students: input.favoritesStudents.map(normalizeStudent)
});

export type User = ReturnType<typeof normalizeUser>;
export type UserFavorites = ReturnType<typeof normalizeUserFavorites>;
