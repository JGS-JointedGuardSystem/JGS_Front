import { AddDeviceRequestType } from "../models/Main";
import { atom } from "recoil";

export const AddDeviceModalInputsAtom = atom<AddDeviceRequestType>({
  key: "AddDeviceModalInputsAtom",
  default: {
    name: "",
    device_no: 0,
    device_type: "",
    latitude: 0,
    longitude: 0,
  },
});
