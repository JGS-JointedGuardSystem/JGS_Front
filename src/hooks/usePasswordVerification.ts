import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { passwordVerification } from "../utils/api/main";
import { toast } from "react-hot-toast";

interface PasswordVerificationRequest {
  password: string;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const usePasswordVerification = (
  request: PasswordVerificationRequest
) => {
  const { password, setIsActive } = request;

  return useMutation(() => passwordVerification(password), {
    onError: (error: AxiosError) => {
      toast.error(`${error.response?.data}`, { duration: 1000 });
    },
    onSuccess: () => {
      setIsActive(false);
      toast.success("확인하였습니다.", { duration: 1000 });
    },
  });
};
