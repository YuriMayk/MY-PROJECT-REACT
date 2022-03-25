import styled from "styled-components";

export const ContainerItems = styled.div`
 width: 414px;
  height: 100%;
  min-height: calc(100vh - 170px);
  left: 0px;
  top: 251px;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${ props => props.isBlur && `
  backdrop-filter: blur(45px);
  `

  }

  `

