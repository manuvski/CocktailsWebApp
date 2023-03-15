import { FC } from 'react';
import {
  Author,
  Container,
  ContentWrapper,
  Description,
  DetailsButton,
  HeartButton,
  ImageContainer,
  Title,
} from './styles';
import { Props } from './types';
import useLogic from '../../views/PostView/logic';

const PostCard: FC<Props> = ({ title, image, comment }) => {
  const { isFavorited, toggleFavorite } = useLogic();
  return (
    <Container>
      <ImageContainer src={image} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{comment}</Description>
        <HeartButton
          className={isFavorited ? 'active' : ''}
          onClick={toggleFavorite}
        />
        <DetailsButton>Ver detalles</DetailsButton>
      </ContentWrapper>
    </Container>
  );
};
//     <Container>
//       <ImageContainer src={image} />
//       <Description> {title} </Description>
//       <Description> {comment} </Description>
//     </Container>
//   );
// };

export default PostCard;
