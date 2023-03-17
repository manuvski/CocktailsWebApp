import { FC, useCallback, useState } from 'react';
import { syncCategories } from '../../services/api/categories';
import {
  ButtonBoxes,
  SyncButton,
  WelcomeButton,
  WelcomeContainer,
  WelcomeMessage,
} from './styles';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


const Landing: FC = () => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const syncData = useCallback(async () => {
    await syncCategories();
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);  }, []);

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
    <WelcomeContainer>
      <SyncButton onClick={syncData}>Sync Categories</SyncButton>
      <WelcomeMessage>Select the desired info</WelcomeMessage>
      <ButtonBoxes>
        <WelcomeButton to="/categories">Categories</WelcomeButton>
        <WelcomeButton to="/random">Get Random Cocktail!</WelcomeButton>
        <WelcomeButton to="/post">All Post</WelcomeButton>
      </ButtonBoxes>
    </WelcomeContainer>
  );
};

export default Landing;
