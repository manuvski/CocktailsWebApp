import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  /* border: 1px solid white; */
  padding: 15px;
  width: 10em;
`;
export const ImageContainer = styled.img`
  width: 150px;
  height: 200px;
  margin-top: 40px;
  margin-bottom: 5px;
  border-radius: 6px;
`;

export const Description = styled.p`
  margin-right: 1px;
  font-size: 18px;
  font-family: Oswald;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const DetailsButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.DementorBlack};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
  cursor: pointer;
`;
