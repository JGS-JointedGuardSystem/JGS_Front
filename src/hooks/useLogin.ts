import { useMutation } from "react-query";
import { userLogin } from "../utils/api/auth";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { setToken } from "../utils/functions/TokenManager";
import { LoginInputType } from "../models/Login";

export const useLogin = (inputData: LoginInputType) => {
  const navigate = useNavigate();

  return useMutation(() => userLogin(inputData), {
    onError: (error: AxiosError) => {
      toast.error(`${error.response?.data}`, { duration: 1000 });
    },
    onSuccess: ({ data }) => {
      toast.success("로그인에 성공했습니다.", { duration: 1000 });
      setToken(data.accessToken, data.refreshToken);
      navigate("/main");
    },
  });
};
