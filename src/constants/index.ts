import { LoginInputDataType } from "../models/Login";

export const LoginInputData: LoginInputDataType[] = [
  {
    title: "아이디",
    name: "id",
    placeholder: "아이디를 입력해 주세요.",
  },
  {
    title: "비밀번호",
    name: "password",
    placeholder: "비밀번호를 입력해 주세요.",
  },
];

export const SignupInputData: LoginInputDataType[] = [
  {
    title: "아이디",
    name: "id",
    placeholder: "아이디를 입력해 주세요.",
  },
  {
    title: "비밀번호",
    name: "password",
    placeholder: "비밀번호를 입력해 주세요.",
  },
  {
    title: "비밀번호 확인",
    name: "checkPassword",
    placeholder: "비밀번호를 입력해 주세요.",
  },
  {
    title: "인증번호",
    name: "certificationNumber",
    placeholder: "인증번호를 입력해 주세요.",
  },
];
