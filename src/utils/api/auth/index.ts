import instance from "../../axios";
import { LoginInputType } from "../../../models/Login";
import { SignupInputType } from "../../../models/Signup";

export const userLogin = async (inputsData: LoginInputType) => {
  const response = await instance.post("/login", {
    id: inputsData.id,
    pw: inputsData.password,
  });
  return response;
};

export const userSignup = async (inputsData: SignupInputType) => {
  const response = await instance.post("/sign", {
    id: inputsData.id,
    pw: inputsData.password,
    confirm_code: inputsData.certificationNumber,
  });
  return response;
};
