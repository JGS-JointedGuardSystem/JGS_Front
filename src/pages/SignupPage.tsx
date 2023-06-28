import styled from "@emotion/styled";
import { LoginBackGroundImg } from "../assets/login";
import { useNavigate } from "react-router";
import SignUpInput from "../components/login/SignUpInput";
import Button from "../components/common/Button";
import { signupInputsAtom } from "../atom/authAtom";
import { useRecoilValue } from "recoil";
import { toast } from "react-hot-toast";
import { SignupInputType } from "../models/Signup";
import { useMutation } from "react-query";
import { userSignup } from "../utils/api/auth";

const SignupPage = () => {
  const navigate = useNavigate();
  const inputsData = useRecoilValue<SignupInputType>(signupInputsAtom);

  const { mutate: onSignup } = useMutation(
    "onSignup",
    () => userSignup(inputsData),
    {
      onSuccess: () => {
        toast.success("회원가입이 완료되었습니다.", { duration: 1000 });
        navigate("/");
      },
      onError: (error: any) => {
        if (
          error.response.status === 400 &&
          error.response.data.message === "중복된 아이디입니다."
        ) {
          toast.error("중복된 아이디입니다.", { duration: 1000 });
        }
      },
    }
  );

  return (
    <Container>
      <Wrapper>
        <p>회원가입</p>
        <SignUpInput />
        <Button text="회원가입" onClick={onSignup} />
        <span>
          이미 계정이 있으신가요?
          <GoLogin onClick={() => navigate("/")}>로그인 하기</GoLogin>
        </span>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
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
  min-height: 499px;
  left: 699px;
  top: 291px;
  background-color: ${({ theme }) => theme.WHITE};
  box-shadow: 0px 4px 100px #000000;
  border-radius: 8px;
  padding: 25px 70px;
  box-sizing: border-box;
  p {
    display: flex;
    justify-content: center;
    font-size: 32px;
    left: 219px;
    font-weight: 600;
  }
  span {
    font-size: 12px;
    display: flex;
    justify-content: center;
    line-height: 14px;
  }
`;

const GoLogin = styled.span`
  font-weight: 600;
  padding-left: 3px;
`;

export default SignupPage;
