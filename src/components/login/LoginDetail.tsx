import styled from "@emotion/styled";
import { LoginInputDataType, LoginInputType } from "../../models/Login";
import { useState } from "react";
import Input from "../common/Input";
import { OnEye, OffEye } from "../../assets/login";

const LoginDetail = () => {
  const [passwordType, setPasswordType] = useState<boolean>(false);
  const LoginInputData: LoginInputDataType[] = [
    {
      title: "아이디",
      name: "id",
      placeholder: "아이디를 입력해 주세요.",
      type: "text",
    },
    {
      title: "비밀번호",
      name: "password",
      placeholder: "비밀번호를 입력해 주세요.",
      type: passwordType ? "text" : "password",
    },
  ];

  const [inputs, setInputs] = useState<LoginInputType>({
    id: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      {LoginInputData.map((item: LoginInputDataType) => (
        <InputContainer key={item.title}>
          <Title htmlFor={item.name}>{item.title}</Title>
          <Input
            id={item.name}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            onChange={(e) => onChange(e)}
          />
          {item.title === "비밀번호" && (
            <EyeButton onClick={() => setPasswordType(!passwordType)}>
              {passwordType ? <img src={OffEye} /> : <img src={OnEye} />}
            </EyeButton>
          )}
        </InputContainer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  > div {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const Title = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
`;

const EyeButton = styled.button`
  position: absolute;
  top: 64px;
  right: 20px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

export default LoginDetail;
