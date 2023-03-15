import { FC } from 'react';
import { Props } from './types';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ContainerButton,
  Logoimg,
  ProfileButton,
  SignoutButton,
  Tittle,
} from '../../components/Navbar/styles';
import { CustomNavbar } from './styles';

const Navbar: FC<Props> = ({ type = 'list', isProfilePage = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    window.localStorage.clear();
    navigate('/');
  };

  const handleProfile = async () => {
    navigate('/profile');
  };

  const isCurrentPageProfile = location.pathname === '/profile';

  return (
    <>
      <CustomNavbar>
        <Tittle to="/landing">
          <Logoimg/>
        </Tittle>
        <ContainerButton>
          {!isProfilePage && isCurrentPageProfile ? null : (
            <ProfileButton onClick={handleProfile}>Profile</ProfileButton>
          )}
          <SignoutButton onClick={handleSignOut}>LogOut</SignoutButton>
        </ContainerButton>
      </CustomNavbar>
    </>
  );
};

export default Navbar;
