import { FC } from "react";
import { Container, Description, ImageContainer } from "./styles";
import { Props } from "./types";

const PostCard: FC<Props> = ({ title, image, comment }) => {
  return (
    <Container>
      <ImageContainer src={image} />
      <Description> {title} </Description>
      <Description> {comment} </Description>
    </Container>
  );
};

export default PostCard;
