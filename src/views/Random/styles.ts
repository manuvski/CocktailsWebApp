import styled, { keyframes } from "styled-components";
export const GeneralContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  background-image: url("https://img.freepik.com/foto-gratis/cuatro-cocteles-elegantes_23-2147795373.jpg");
`;
export const Container = styled.div`
  padding: 2em;
  padding-top: 5px;
  padding-bottom: 25px;
  max-width:400px;
  max-height:600px;
`;

export const BackContainer = styled.div`
`
export const ButtonBack = styled.button`
  position: absolute;
  top: 90px;
  left: 10px;
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  font-family: oswald;
  color: white;
  cursor: pointer;
  background: linear-gradient(315deg, #000000 0%, #000000 74%);
`;

export const RandomButton = styled.button`
  width: 270px;
  height: 75px;
  border-radius: 5px;
  margin: 2px;
  font-family: oswald;
  color: black !important;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(315deg, #ffffff 0%, #ffffff 74%);
`;

export const shakeAnimation = keyframes`
0% {
  transform: translateX(0);
}
25% {
  transform: translateX(-5px);
}
50% {
  transform: translateX(5px);
}
75% {
  transform: translateX(-5px);
}
100% {
  transform: translateX(0);
}
`;

export const AnimatedButton = styled.button`
font-size: 20px;
padding: 10px 20px;
background-color: #000000;
color: white;
border: none;
border-radius: 5px;
font-family: Oswald;
animation: ${shakeAnimation} 0.5s infinite;

&:hover {
  cursor: pointer;
}
`;