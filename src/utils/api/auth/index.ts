import { toast } from "react-hot-toast";
import { SignupInputType } from "../../../models/Signup";
import instance from "../../axios";
import { LoginInputType } from "../../../models/Login";
import { setToken } from "../../functions/TokenManager";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

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
        setToken(data.access_token, data.refresh_token);
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
