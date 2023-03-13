import { FC, useState, useCallback, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../services/api/profile";
import { Profile as ProfileModel } from "../../models/profile";
import { App, Container, Info, SpinnerContainer } from "./styles";

const Profile: FC = () => {
 const [userinfo, setUserInfo] = useState<ProfileModel | null>(null);
 const [isloading, setIsLoading] = useState<boolean>(false);
 const navigate = useNavigate();

 const getProfileList = useCallback( async () => {
setIsLoading(true)
const userprofile = await getUserInfo();
setUserInfo(userprofile);
setIsLoading(false);
}, []);


useEffect(()=> {
  getProfileList();
}, [getProfileList]);

if (isloading) {
  return <SpinnerContainer>Loading</SpinnerContainer>;
}
  return (
   <App>
    <Container>
      <Info>Id: {userinfo?.id}</Info>
      <Info>Email: {userinfo?.email}</Info>
    </Container>
   </App>
  );
};

export default memo(Profile);
