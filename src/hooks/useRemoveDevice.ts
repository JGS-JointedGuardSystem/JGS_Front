import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { removeDevice } from "../utils/api/main";

interface RemoveDeviceRequestType {
  device_no: number;
  deviceName: string;
}

export const useRemoveDevice = ({
  device_no,
  deviceName,
}: RemoveDeviceRequestType) => {
  return useMutation(() => removeDevice(device_no), {
    onError: (error: AxiosError) => {
      toast.error(`${error.response?.data}`, { duration: 1000 });
    },
    onSuccess: () => {
      toast.success(`${deviceName}가 삭제 되었습니다.`, { duration: 1000 });
    },
  });
};
