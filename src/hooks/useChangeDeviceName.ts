import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { renameDevice } from "../utils/api/main";
import { RenameDeviceRequestType } from "../models/Main";

export const useChangeDeviceName = ({
  device_no,
  Device_new_name,
}: RenameDeviceRequestType) => {
  return useMutation(() => renameDevice({ device_no, Device_new_name }), {
    onError: (error: AxiosError) => {
      toast.error(`${error.response?.data}`, { duration: 1000 });
    },
    onSuccess: () => {
      toast.success(`장치 이름이 ${Device_new_name}로 변경 되었습니다.`, {
        duration: 1000,
      });
    },
  });
};
