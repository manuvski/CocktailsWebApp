import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  App,
  BackContainer,
  ButtonBack,
  Container,
} from "./styles";
import PostCard from "../../components/PostCard";
import useLogic from "./logic";

const Post: FC = () => {
  const navigate = useNavigate();
const {
  isloading,
  goToBack,
  postList, 
} = useLogic()

  return (
    <App>
    <BackContainer>
      <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
    </BackContainer>
    {/* <SyncButton onClick={syncData}>Sync Categories</SyncButton> */}
    <Container>
      {postList.map((post, index) => (
        <div key={index}>
          <PostCard
            id={category.id}
            categoryName={category.category}
            onClick={goToDetails}
          />
        </div>
      ))}
    </Container>
  </App>
  );
};

export default memo(Post);
