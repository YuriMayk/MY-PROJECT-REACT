import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 132px;
  width: 342px;
  height: 74px;
  background: ${props => props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

${props => props.isBack &&`
margin-bottom: 70px;
border: 1px solid #FFFFFF;
img{
    transform: rotateY(180deg)
  }
`}

`;