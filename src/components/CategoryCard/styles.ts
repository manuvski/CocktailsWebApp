import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid blueviolet;
  background-color: white;
  border-radius: 10px;
`;

export const ImageContainer = styled.img`
  width: 150px;
  height: 200px;
  margin-top: 40px;
  margin-bottom: 5px;
  border-radius: 6px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.9); /* Agregando box-shadow para dar efecto de iluminación */
`;

export const Description = styled.p`
  margin-right: 1px;
  font-size: 18px;
  font-family: Oswald;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.DementorBlack};
`;

export const DescriptionApi = styled.p`
  display: contents;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.GriffindorRedDark};
`;

export const DetailsButton = styled(Link)`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.DementorBlack};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  font-size: large;
  background-color: ${({ theme }) => theme.colors.DementorBlack};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
`;
