import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

import instance from "../../axios";
import { SignupInputType } from "../../../models/Signup";
import { LoginInputType } from "../../../models/Login";
import { setToken } from "../../functions/TokenManager";

export const UserLogin = () => {
  const navigate = useNavigate();

  return useMutation(
    async (inputsData: LoginInputType) =>
      instance.post("/login", {
        id: inputsData.id,
        pw: inputsData.password,
      }),
    {
      onError: (error: AxiosError) => {
        toast.error(`${error.response?.data}`, { duration: 1000 });
      },
      onSuccess: ({ data }) => {
        toast.success("로그인에 성공했습니다.", { duration: 1000 });
        setToken(data.accessToken, data.refreshToken);
        navigate("/main");
      },
    }
  );
};

export const UserSignup = () => {
  const navigate = useNavigate();

  return useMutation(
    async (inputsData: SignupInputType) =>
      instance.post("/sign", {
        id: inputsData.id,
        pw: inputsData.password,
        confirm_code: inputsData.certificationNumber,
      }),
    {
      onError: (error: AxiosError) => {
        toast.error(`${error.response?.data}`, { duration: 1000 });
      },
      onSuccess: () => {
        toast.success("회원가입에 성공하였습니다.", { duration: 1000 });
        navigate("/login");
      },
    }
  );
};
