import { normalizePost } from "../../models/post";
import { getToken } from "../storage";

export type PostResponse = {
    id: string,
    title: string;
    image: number;
    comment: string;
    updatedAt: Date,
	createdAt: Date,
	postCategory: string,
	user_FK: string
  };


const BASE_API_URL="http://localhost:8000/feeds"


export const createPost = async (values: { title:string,  image: string, comment:string  }) => {
    try {
        const token = getToken();
      const response = await fetch(`${BASE_API_URL}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title:values.title, image: values.image, comment: values.comment }),
      });
     
      const post = await response.json();
      console.log({ post });
      return normalizePost(post);
    } catch (error) {
      console.log((error as Error).message);
    }
  };