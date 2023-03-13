import { FC, Key, memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  App,
  Container,
  Image,
  Error,
  EditButton,
  InputContainer,
  Label,
  Input,
  AppEdit,
  ButtonBack,
} from "./styles";
import { Field, Form, Formik } from "formik";
import { validationSchema } from "./constants";
import { useNavigate, useParams } from "react-router-dom";
import useLogic from "./logic";
import { BackContainer, SyncButton } from "../Categories/styles";
import Card from "../../components/Card";


const CharacterEdit: FC = () => {
  const {
    isLoading,
    ordinaryDrink
  } = useLogic();

  if (isLoading) {
    return <p>LOADING</p>;
  }

  return (
    <App>
      <BackContainer>
      </BackContainer>
      <Container>
        {ordinaryDrink && Object.values(ordinaryDrink).map((category:any, index: Key | null | undefined) => (
          <div key={index}>
            <Card id={category.id} category={category.category} />
          </div>
        ))}
      </Container>
    </App>
  );
};

export default memo(CharacterEdit);
