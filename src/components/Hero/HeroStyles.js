import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Foto = styled.div`
  float: right;
  width: 400px;
  border: 2px solid black;
  box-shadow:5px 5px 10px 5px rgba(0, 200, 255, 1);
  margin: 20px;
  border-radius: 15%;
  background: black;
  
  :hover {
    box-shadow:5px 5px 10px 5px #FFFFFF;
    
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70%;
    display: flex;
    flex-direction: column;
    
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`;
