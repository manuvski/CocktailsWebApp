import { FC } from "react";
import { Description } from "../Card/styles";
import { Container, id, Email, } from "./styles";
import { Props } from "./types";

const ProfileCard: FC<Props> = ({ id, email }) => {
  return (
    <Container>
     
     <Description>User ID: {id}</Description>
      <Description>Email: {email}</Description>
     
    </Container>
  );
};

export default ProfileCard;
