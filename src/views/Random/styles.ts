import styled from "styled-components";
export const App = styled.div`
  text-align: center;
  background-color: #282c34;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
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
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
`;

export const RandomButton = styled.button`
  width: 250px;
  height: 75px;
  border-radius: 5px;
  margin: 2px;
  cursor: pointer;
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
`;