import { useState } from "react";
import { SignupInputData } from "../../constants";
import Input from "../common/Input";
import styled from "@emotion/styled";
import { Eye } from "../../assets/login";
import { SignupInputType } from "../../models/Signup";
import { useRecoilState } from "recoil";
import { signupInputsAtom } from "../../atom/authAtom";

function SignUpInput() {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isCheckShowPassword, setIsCheckShowPassword] =
    useState<boolean>(false);
  const [inputs, setInputs] = useRecoilState<SignupInputType>(signupInputsAtom);

  const passwordType = isShowPassword ? "text" : "password";
  const checkPasswordType = isCheckShowPassword ? "text" : "password";
  const getPasswordType = (name: string) => {
    switch (name) {
      case "password":
        return passwordType;
      case "checkPassword":
        return checkPasswordType;
      default:
        return "text";
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <InputContainer>
      {SignupInputData.map((item) => (
        <div key={item.name}>
          <Title htmlFor={item.name}>{item.title}</Title>
          <Input
            id={item.name}
            name={item.name}
            placeholder={item.placeholder}
            onChange={(e) => onChange(e)}
            type={getPasswordType(item.name)}
          />
          {(item.title === "비밀번호" || item.title === "비밀번호 확인") && (
            <Eye
              onClick={() => {
                if (item.title === "비밀번호")
                  setIsShowPassword(!isShowPassword);
                if (item.title === "비밀번호 확인")
                  setIsCheckShowPassword(!isCheckShowPassword);
              }}
              isShowPassword={
                item.title === "비밀번호" ? isShowPassword : isCheckShowPassword
              }
            />
          )}
        </div>
      ))}
    </InputContainer>
  );
}

export default SignUpInput;

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
