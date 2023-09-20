import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { addDevice } from "../utils/api/main";
import { AddDeviceRequestType } from "../models/Main";

export const useAddDevice = ({
  name,
  device_no,
  device_type,
  latitude,
  longitude,
}: AddDeviceRequestType) => {
  return useMutation(
    () =>
      addDevice({
        name: name,
        device_no: device_no,
        device_type: device_type,
        latitude: latitude,
        longitude: longitude,
      }),
    {
      onError: (error: AxiosError) => {
        toast.error(`${error.response?.data}`, { duration: 1000 });
      },
      onSuccess: () => {
        toast.success(`${name}가 추가 되었습니다.`, { duration: 1000 });
      },
    }
  );
};
