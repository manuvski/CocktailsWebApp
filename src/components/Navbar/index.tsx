import { FC } from 'react';
import { Props } from './types';
import { useNavigate } from 'react-router-dom';
import {
  ContainerButton,
  Logoimg,
  ProfileButton,
  SignoutButton,
  Tittle,
} from '../../components/Navbar/styles';
import { CustomNavbar } from './styles';
import 'font-awesome/css/font-awesome.min.css';
import { FaUser } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar: FC<Props> = ({ type = 'list' }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    window.localStorage.clear();
    navigate('/');
  };

  const handleProfile = async () => {
    navigate('/profile');
  };

  return (
    <>
      <CustomNavbar>
        <Tittle to="/landing">
          <Logoimg></Logoimg>
        </Tittle>
        <ContainerButton>
          <ProfileButton onClick={handleProfile}>
            <FaUser />
            Profile
          </ProfileButton>
          <SignoutButton onClick={handleSignOut}>
            <FaSignOutAlt />
            LogOut
          </SignoutButton>
        </ContainerButton>
      </CustomNavbar>
    </>
  );
};

export default Navbar;
