
import styled from "styled-components";
import Background from "../../assets/background-users.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  height: 100%;
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  margin: 83px 0 68px 0;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;
  margin-left: 61px;
  align-self: flex-start;
`;

export const User = styled.li`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 28px;
  padding-left: 25px;
  margin: 10px 0;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  }

  button {
    background: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;
