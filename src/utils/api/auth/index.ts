import { toast } from "react-hot-toast";
import { SignupInputType } from "../../../models/Signup";
import instance from "../../axios";
import { LoginInputType } from "../../../models/Login";
import { setToken } from "../../functions/TokenManager";

export const userLogin = async (inputsData: LoginInputType) => {
  return await instance
    .post(`/login`, {
      id: inputsData.id,
      pw: inputsData.password,
    })
    .then((res) => {
      setToken(res.data.accessToken, res.data.refreshToken);
    });
};

export const userSignup = async (inputsData: SignupInputType) => {
  if (inputsData.password !== inputsData.checkPassword) {
    toast.error("비밀번호가 일치하지 않습니다.", { duration: 1000 });
  } else {
    await instance.post(`/sign`, {
      id: inputsData.id,
      pw: inputsData.password,
      confirm_code: inputsData.certificationNumber,
    });
  }
};
