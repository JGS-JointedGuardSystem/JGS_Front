import { useState } from 'react';
import styled from 'styled-components';
import { LoginBackGroundImg } from '../../assets/login';
import { theme } from '../../styles/Theme';
import { PassWordProps, ContainerProps, PasswordInputProps} from '../../models/LoginProps';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import {text} from "./constant"

const Login = (setPasswordType:React.Dispatch<React.SetStateAction<string>>) => {
  const [showPassWord, setShowPassWord] = useState<PassWordProps>({
    type: "password",
    visible: false,
  });

  const toggleShowPassword = ():void => {
    setShowPassWord((currentItems) => ({
      ...currentItems,
      visible: !currentItems.visible,
      type: currentItems.visible ? "password" : "text",
    }));
  };

  return (
    <Container bgImage={LoginBackGroundImg}>
      <Wrapper>
        <p>로그인</p>
        <LoginDetail>
          {text.map((item) => (
            <div key={item.name}>
              <Title>{item.title}</Title>
              {item.name === 'password' ? (
                <PasswordInput
                  type={showPassWord.type}
                  placeholder={item.placeholder}
                  onChange={() => {}}
                  onToggleShowPassword={toggleShowPassword}
                  showPassword={showPassWord.visible}
                />
              ) : (
                <Input
                  type={item.name === 'email' ? 'email' : 'text'}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              )}
            </div>
          ))}
        </LoginDetail>
        <Button>로그인</Button>
        <span>계정이 없으신가요?<GoSignUp>회원가입하기</GoSignUp></span>
      </Wrapper>
    </Container>
  );
};

const PasswordInput = ({
  type,
  placeholder,
  onChange,
  onToggleShowPassword,
  showPassword,
}: PasswordInputProps) => {
  return (
    <InputContainer>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <TogglePasswordButton onClick={onToggleShowPassword}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </TogglePasswordButton>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input<{ placeholder: string }>`
  width: 100%;
  height: 63px;
  padding-left: 19px;
  background-color: ${theme.grey100};
  border: none;
  border-radius: 8px;
  outline: none;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(1.82deg, rgba(0, 0, 0, 0.75) 58.5%, rgba(0, 0, 0, 0) 133.9%),
    url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  width: 522px;
  height: 499px;
  left: 699px;
  top: 291px;
  background-color: ${theme.WHITE};
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

const LoginDetail = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  > div {
    width: 100%;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
`;

const Button = styled.button`
  background-color: ${theme.BLACK};
  border: none;
  border-radius: 8px;
  width: 274px;
  height: 53px;
  color: ${theme.WHITE};
  font-weight: 600;
  font-size: 16px;
  margin: 37px auto 0 auto;
  display: block;
  margin-bottom: 11px;
  &:hover {
    background-color: ${theme.grey400};
  }
`;

const GoSignUp = styled.span`
  font-weight: 600;
  padding-left: 3px;
`;

export default Login;