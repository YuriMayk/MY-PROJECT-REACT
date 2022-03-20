import styled from "styled-components";
import Background from "./assets/background-login.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  margin: 30px 0 44px 0;
`;
export const ContainerSmaller = styled.div`
  width: 414px;
  height: 100vh;
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
`;
export const H1 = styled.h1`
  margin: 50px auto 81px auto;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
`;
export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;
  margin-left: 61px;
  align-self: flex-start;
`;
export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  padding-left: 25px;
  margin-bottom: 34px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 132px;
  width: 342px;
  height: 74px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
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
