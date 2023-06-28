import styled from "@emotion/styled";
import { LoginBackGroundImg } from "../assets/login";
import LoginInput from "../components/login/LoginInput";
import { useNavigate } from "react-router";
import Button from "../components/common/Button";
import { useRecoilValue } from "recoil";
import { loginInputsAtom } from "../atom/authAtom";
import { UserLogin } from "../utils/api/auth";

function LoginPage() {
  const navigate = useNavigate();
  const inputsData = useRecoilValue(loginInputsAtom);
  const { mutate: loginMutate } = UserLogin();

  return (
    <Container>
      <Wrapper>
        <p>로그인</p>
        <LoginInput />
        <Button text="로그인" onClick={() => loginMutate(inputsData)} />
        <span>
          계정이 없으신가요?
          <GoSignUp onClick={() => navigate("/signup")}>회원가입하기</GoSignUp>
        </span>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
      1.82deg,
      rgba(0, 0, 0, 0.75) 58.5%,
      rgba(0, 0, 0, 0) 133.9%
    ),
    url(${LoginBackGroundImg});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  width: 522px;
  height: 499px;
  left: 699px;
  top: 291px;
  background-color: ${({ theme }) => theme.WHITE};
  box-shadow: 0px 4px 100px #000000;
  border-radius: 8px;
  padding: 0 70px;
  box-sizing: border-box;
  p {
    display: flex;
    justify-content: center;
    font-size: 32px;
    left: 219px;
    padding-top: 43px;
    font-weight: 600;
  }
  span {
    font-size: 12px;
    display: flex;
    justify-content: center;
    line-height: 14px;
  }
`;

const GoSignUp = styled.span`
  font-weight: 600;
  padding-left: 3px;
`;

export default LoginPage;
