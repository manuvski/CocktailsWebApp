import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 300px;
  padding: 5px;
  padding-botton: 25px;
  margin: 2em;
  border-radius: 20px;
  box-shadow: 0 0 0 5px #740001;
  text-aling: center;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 10px;
    //  falta poner el color
    transform: scale(1.5);
    transition: box-shadow 0.5 ease, transform 0.5 ease;
  }
`;

export const id = styled.p``;

export const Email = styled.p``;
