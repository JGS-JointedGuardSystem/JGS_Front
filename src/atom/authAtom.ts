import { atom } from "recoil";
import { SignupInputType } from "../models/Signup";

export const signupInputsAtom = atom<SignupInputType>({
  key: "signupInputsAtom",
  default: {
    id: "",
    password: "",
    checkPassword: "",
    certificationNumber: 0,
  },
});

export const loginInputsAtom = atom({
  key: "loginInputsAtom",
  default: {
    id: "",
    password: "",
  },
});
