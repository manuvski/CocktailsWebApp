import { FC, useState, useCallback, useEffect, memo } from "react";
import {
  ButtonBack,
  ButtonContainer,
  Container,
  FavoriteContainer,
  GeneralContainer,
  Info,
  SpinnerContainer,
} from "./styles";
import { getUserInfo } from "../../services/api/profile";
import type { Profile } from "../../models/profile";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


const ProfileView: FC = () => {
  const [userinfo, setUserInfo] = useState<Profile | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getProfileList = useCallback(async () => {
    setIsLoading(true);
    const userprofile = await getUserInfo();
    setUserInfo(userprofile);
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);  }, []);

  const goToBack = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);

  if (isloading) {
    return (
      <Stack sx={{ width: '50%', color: 'grey.500', marginTop:'10rem',margin:'0 auto' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
    )
  }

  return (
    <GeneralContainer>
      <ButtonContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </ButtonContainer>
      <Container>
        <Info>Name: {userinfo?.name}</Info>
        <Info>ID: {userinfo?.id}</Info>
        <Info>EMAIL: {userinfo?.email}</Info>
      </Container>
      <FavoriteContainer>❤️ 👇 Your Favorites 👇 ❤️</FavoriteContainer>
    </GeneralContainer>
  );
};

export default memo(ProfileView);