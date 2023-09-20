import { LoginInputDataType } from "../models/Login";
import { AddDeviceType } from "../models/Main";

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

export const AddDeviceInputData: AddDeviceType[] = [
  {
    title: "장치 이름",
    name: "name",
    placeholder: "장치 이름을 입력해 주세요.",
  },
  {
    title: "장치 번호",
    name: "device_no",
    placeholder: "장치 번호를 입력해 주세요.",
  },
  {
    title: "장치 타입",
    name: "device_type",
    placeholder: "장치 타입을 입력해 주세요.",
  },
];

export const CoordinatesInputData: AddDeviceType[] = [
  {
    title: "위도",
    name: "latitude",
    placeholder: "위도를 입력해 주세요.",
  },
  {
    title: "경도",
    name: "longitude",
    placeholder: "경도를 입력해 주세요.",
  },
];
