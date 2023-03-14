import { FC, memo } from "react";
import {
  GeneralContainer,
  BackContainer,
  ButtonBack,
  Container,
} from "./styles";
import PostCard from "../../components/PostCard";
import useLogic from "./logic";

const Post: FC = () => {
const {
  goToBack,
  postList, 
} = useLogic()

  return (
    <GeneralContainer>
    <BackContainer>
      <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
    </BackContainer>
    <Container>
      {postList.map((post, index) => (
        <div key={index}>
          <PostCard
            title={post.title}
            image={post.image}
            comment={post.comment}
          />
        </div>
      ))}
    </Container>
  </GeneralContainer>
  );
};

export default memo(Post);
