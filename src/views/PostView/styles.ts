import styled from "styled-components";
export const GeneralContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  justify-content: flex-start;
  background-image: url("https://i.ibb.co/FxKbYzw/peakpx.jpg");
  background-size: contain;
  background-position: center;
`;

export const Container = styled.div`
  padding: 5em;
  padding-top: 70px;
  padding-bottom: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;
export const BackContainer = styled.div`
  display: flex;
`;

export const SyncButton = styled.button`
  width: 90px;
  height: 50px;
  border-radius: 5px;
  margin: 10px;
  font-family: oswald;
  color: white;
  cursor: pointer;
  background: linear-gradient(315deg, #000000 0%, #282c34 74%);
`;

export const DeleteButton = styled.button`
  width: 70px;
  height: 25px;
  border-radius: 5px;
  margin: 2px;
  cursor: pointer;
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
`;

export const ButtonPreview = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
`;
export const ButtonNext = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
`;
export const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
`;

export const ButtonBack = styled.button`
  position: absolute;
  top: 90px;
  left: 10px;
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  font-family: oswald;
  cursor: pointer;
  background: linear-gradient(315deg, #ffffff 0%, #ffffff 74%);
`;
