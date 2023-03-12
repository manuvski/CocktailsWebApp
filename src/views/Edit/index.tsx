import { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
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
} from "./styles";
import { Field, Form, Formik } from "formik";
import { validationSchema } from "./constants";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../../models/post";
import { updatePost } from "../../services/api/post";

const EditForm: FC = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleActiveEdition = useCallback(async () => {
    setIsEditing(true);
  }, []);

  const onEditCharacter = useCallback(
    async (values: Partial<Post>) => {
      if (isEditing && postId) {
        setIsLoading(true);
        const editedPost = await updatePost(postId, values);
        if (editedPost) {
          setPost(editedPost);
        }
        setIsLoading(false);
      }
    },
    [postId, isEditing]
  );

  const initialValues = useMemo(
    () => ({
      title: post?.title || "",
      image: post?.image || "",
      comment: post?.comment || "",
    }),
    [post]
  );

  const handleGetCharacter = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const post = await getCharacterById(id);
      setCharacter(character);
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    handleGetCharacter(characterId);
  }, [handleGetCharacter, characterId]);

  if (isLoading) {
    return <p>LOADING</p>;
  }

  return (
    <App>
      <AppEdit>
        <Image src={character?.image} />
        <Container>
          {!isEditing && (
            <EditButton onClick={handleActiveEdition}>
              Active Edition
            </EditButton>
          )}
          <Formik
            type="edit"
            validationSchema={validationSchema}
            onSubmit={onEditCharacter}
            initialValues={initialValues}
          >
            <Form>
              <Field name="name">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Name</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              <Field name="species">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Species</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              <Field name="house">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>House</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              <Field name="wizard">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Wizard</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              <Field name="ancestry">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Ancestry</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              <Field name="patronus">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Patronus</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              <Field name="actor">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Actor</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              {isEditing && <EditButton type="submit">Edit</EditButton>}
            </Form>
          </Formik>
        </Container>
      </AppEdit>
    </App>
  );
};

export default memo(EditForm);
