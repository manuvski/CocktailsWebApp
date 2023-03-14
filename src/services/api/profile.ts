import { normalizeProfile, Profile } from "../../models/profile";
import { getToken } from "../../services/storage";

const BASE_API_URL = "http://localhost:8000/users/profile";

export const getUserInfo = async (): Promise<Profile | null> => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return normalizeProfile(data);
  } catch (error) {
    console.log((error as Error).message);
    return null;
  }
};