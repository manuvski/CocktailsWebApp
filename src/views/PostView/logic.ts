import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Category } from "../../models/categories";
import { Post } from "../../models/post";
import { getCategories, syncCategories } from "../../services/api/categories";
import { getAllPosts } from "../../services/api/post";

const useLogic = () => {
  const [postList, setpostList] = useState<Post[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [isFavorited, setIsFavorited] = useState(false);

  
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  //    const { id: categoryId } = useParams();
  const navigate = useNavigate();

  const getPostList = useCallback(async () => {
    const post = await getAllPosts();
    console.log("post", post);
    setpostList(post);
  }, []);

  //   const syncData = useCallback(async () => {
  //     await syncCategories();
  //     setIsLoading(false);
  //     getCategoriesList();
  //   }, []);

  useEffect(() => {
    getPostList();
  }, [getPostList]);

  const goToBack = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

  //   const goToDetails = useCallback(() => {
  //     navigate(`/categories/${categoryId}`, { replace: true });
  //   }, [navigate]);

  return {
    isloading,
    goToBack,
    postList,
    isFavorited,
    setIsFavorited,
    toggleFavorite
  };
};

export default useLogic;
