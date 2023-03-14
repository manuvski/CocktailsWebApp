import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomNavbar = styled.nav`
 
  display: flex;
  justify-content: space-between;
  height: 90px;
  width: 100%;
  background-image: linear-gradient(to right, #800000, #000000 );
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
`;

export const SignoutButton = styled.button`
  font-family: Oswald;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(315deg, #E8A808 0%, #DD1103 74%);
  color: ${({ theme }) => theme.colors.White};
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const ProfileButton = styled.button`
  font-family: Oswald;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(315deg, #E8A808 0%, #DD1103 74%);
  color: ${({ theme }) => theme.colors.White};
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const Tittle = styled(Link)`
  padding-bottom: 16px;
  margin: 16px;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.font.MyFont};
  text-decoration: none;
  font-size: 30px;
  &:hover {
    color: ${({ theme }) => theme.colors.LightGreen};
  }
`;

export const Logo = styled.div`
  background-image: url("https://i.ibb.co/v1Rbx3Z/Logo-title-navbar-ok.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 70px;
  height: 70px;
`;