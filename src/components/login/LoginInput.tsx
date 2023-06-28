import styled from "@emotion/styled";
import { LoginInputDataType, LoginInputType } from "../../models/Login";
import { useState } from "react";
import Input from "../common/Input";
import { Eye } from "../../assets/login";
import { LoginInputData } from "../../constants";
import { useRecoilState } from "recoil";
import { loginInputsAtom } from "../../atom/authAtom";

const LoginInput = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const passwordType = isShowPassword ? "text" : "password";

  const [inputs, setInputs] = useRecoilState<LoginInputType>(loginInputsAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <InputContainer>
      {LoginInputData.map((item: LoginInputDataType) => (
        <div key={item.title}>
          <Title htmlFor={item.name}>{item.title}</Title>
          <Input
            id={item.name}
            name={item.name}
            placeholder={item.placeholder}
            onChange={(e) => onChange(e)}
            type={item.title === "아이디" ? "text" : passwordType}
          />
          {item.title === "비밀번호" && (
            <Eye
              onClick={() => setIsShowPassword(!isShowPassword)}
              isShowPassword={isShowPassword}
            />
          )}
        </div>
      ))}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  > div {
    width: 100%;
    position: relative;
  }
`;

const Title = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
`;

export default LoginInput;
