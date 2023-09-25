import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { ChangeDeviceLocationModalInputsAtom } from "../atom/deviceAtom";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { ChangeLocationDeviceType } from "../models/Main";
import { changeLocationDevice } from "../utils/api/main";

export const useChangeDeviceLocation = ({
  device_no,
  latitude,
  longitude,
}: ChangeLocationDeviceType) => {
  return useMutation(
    () => changeLocationDevice({ device_no, latitude, longitude }),
    {
      onError: (error: AxiosError) => {
        toast.error(`${error.response?.data}`, { duration: 1000 });
      },
      onSuccess: () => {
        toast.success(
          `장치 위치가 위도:${latitude} 경도:${longitude}로 변경 되었습니다.`,
          {
            duration: 2000,
          }
        );
      },
    }
  );
};
