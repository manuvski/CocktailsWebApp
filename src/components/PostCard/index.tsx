import { FC, useCallback, useState } from 'react';
import {
  Container,
  ContentWrapper,
  Description,
  DetailsButton,
  HeartButton,
  ImageContainer,
  Title,
} from './styles';
import { Props } from './types';

const PostCard: FC<Props> = ({
  title,
  image,
  comment,
  toggleFav,
  id,
  isFavorite,
}) => {
  const [isFav, setIsFav] = useState(isFavorite);
  const handleToggleFav = useCallback(() => {
    setIsFav(!isFav);
    toggleFav(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFav]);
  return (
    <Container>

      <ImageContainer src={image} />
      <ContentWrapper>
      <HeartButton
        className={isFav ? 'active' : ''}
        onClick={handleToggleFav}
      />
        <Title>{title}</Title>
        <Description>{comment}</Description>

        <DetailsButton>Ver detalles</DetailsButton>
      </ContentWrapper>
    </Container>
  );
};
export default PostCard;

// const PostCard: FC<Props> = ({ title, image, comment }) => {
//   const { isFavorited, toggleFavorite } = useLogic();
//   return (
//     <Container>
//       <ImageContainer src={image} />
//       <ContentWrapper>
//         <HeartButton
//           className={isFavorited ? 'active' : ''}
//           onClick={toggleFavorite}
//         />
//         <Title>{title}</Title>
//         <Description>{comment}</Description>
//         <DetailsButton>Ver detalles</DetailsButton>
//       </ContentWrapper>
//     </Container>
//   );
// };

// export default PostCard;
