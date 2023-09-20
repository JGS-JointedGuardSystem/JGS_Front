import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { SignupInputType } from "../models/Signup";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { userSignup } from "../utils/api/auth";

export const useSignup = (inputsData: SignupInputType) => {
  const navigate = useNavigate();

  return useMutation(() => userSignup(inputsData), {
    onError: (error: AxiosError) => {
      toast.error(`${error.response?.data}`, { duration: 1000 });
    },
    onSuccess: () => {
      toast.success("회원가입에 성공하였습니다.", { duration: 1000 });
      navigate("/");
    },
  });
};
