import { getToken } from "../storage";
import {
  normalizeCategory,
} from "../../models/categories";

export type CategoryResponse = {
  id: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
};

const BASE_API_URL = "http://localhost:8000/categories";

export const getCategories = async () => {
  try {
    const token = getToken();
    const response = await fetch("http://localhost:8000/categories/type", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: CategoryResponse[] = await response.json();
    return data.map(normalizeCategory);
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncCategories = async () => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/sync`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

// export const getCharacterById = async (
//   id: string
// ): Promise<Character | null> => {
//   try {
//     const token = getToken();
//     const response = await fetch(`${BASE_API_URL}/${id}`, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const data: CharacterResponse = await response.json();
//     return normalizeCharacter(data);
//   } catch (error) {
//     console.log((error as Error).message);
//   }
//   return null;
// };

// export const removeCharacter = async (id: string) => {
//   try {
//     const token = getToken();
//     await fetch(`${BASE_API_URL}/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   } catch (error) {
//     console.log((error as Error).message);
//   }
// };

// export const createCharacter = async (data: Omit<Character, "id">) => {
//   try {
//     const token = getToken();
//     const response = await fetch(BASE_API_URL, {
//       method: "POST",
//       headers: { Authorization: `Bearer ${token}` },
//       body: JSON.stringify(data),
//     });
//     const character: CharacterResponse = await response.json();
//     return normalizeCharacter(character);
//   } catch (error) {
//     console.log((error as Error).message);
//   }
// };

// export const updateCharacter = async (
//   id: string,
//   data: Partial<CharacterInput>
// ) => {
//   try {
//     console.log({ data });
//     const token = getToken();
//     const response = await fetch(`${BASE_API_URL}/${id}`, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const character: CharacterResponse = await response.json();
//     console.log({ character });
//     return normalizeCharacter(character);
//   } catch (error) {
//     console.log((error as Error).message);
//   }
// };
