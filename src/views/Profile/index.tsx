import { FC, useState, useCallback, useEffect, memo } from "react";
import {
  App,
  ButtonBack,
  ButtonContainer,
  Container,
  Info,
  SpinnerContainer,
  Sections,
  Section,
  SectionTitle,
  SectionContent,
  SectionCard,
  SectionInfo,
} from "./styles";
import { getUserFavorites, getUserInfo } from "../../services/api/profile";
import type { UserFavorites, User } from "../../models/profile";
import { useNavigate, useParams } from "react-router-dom";

const Profile: FC = () => {
  const [userinfo, setUserInfo] = useState<User | null>(null);
  const [userfavs, setUserFavs] = useState<UserFavorites | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getProfileInfo = useCallback(async () => {
    setIsLoading(true);
    const userprofile = await getUserInfo();
    setUserInfo(userprofile);
    setIsLoading(false);
  }, []);

  const getFavoriteList = useCallback(async (id?: string) => {
    setIsLoading(true);
    const userfavorites = await getUserFavorites();
    console.log(userfavorites, "esto es userfav");
    setUserFavs(userfavorites);
    setIsLoading(false);
  }, []);

  const goToBack = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

  useEffect(() => {
    getProfileInfo();
  }, [getProfileInfo]);

  useEffect(() => {
    getFavoriteList();
  }, [getFavoriteList]);

  if (isloading) {
    return <SpinnerContainer>LOADING</SpinnerContainer>;
  }

  return (
    <App>
      <ButtonContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </ButtonContainer>
      <Container>
        <Info>ID: {userinfo?.id}</Info>
        <Info>EMAIL: {userinfo?.email}</Info>
      </Container>

      <Container>
        <Sections>
          <Section>
            <SectionTitle>Personajes</SectionTitle>
            <SectionContent>
              {userfavs?.characters.map(character => (
                <SectionCard>
                  <SectionInfo>{character.name}</SectionInfo>
                  <SectionInfo>{character.actor}</SectionInfo>
                </SectionCard>
              ))}
            </SectionContent>
          </Section>
          <Section>
            <SectionTitle>Hechizos</SectionTitle>
            <SectionContent>
              {userfavs?.spells.map(spell => (
                <SectionCard>
                  <SectionInfo>{spell.name}</SectionInfo>
                  <SectionInfo>{spell.description}</SectionInfo>
                </SectionCard>
              ))}
            </SectionContent>
          </Section>
          <Section>
            <SectionTitle>Profesores</SectionTitle>
            <SectionContent>
              {userfavs?.staff.map(staff => (
                <SectionCard>
                  <SectionInfo>{staff.name}</SectionInfo>
                  <SectionInfo>{staff.actor}</SectionInfo>
                </SectionCard>
              ))}
            </SectionContent>
          </Section>
          <Section>
            <SectionTitle>Alumnos</SectionTitle>
            <SectionContent>
              {userfavs?.students.map(student => (
                <SectionCard>
                  <SectionInfo>{student.name}</SectionInfo>
                  <SectionInfo>{student.actor}</SectionInfo>
                </SectionCard>
              ))}
            </SectionContent>
          </Section>
        </Sections>
      </Container>
    </App>
  );
};

export default memo(Profile);
