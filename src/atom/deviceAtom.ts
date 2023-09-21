import { AddDeviceRequestType, ChangeLocationDeviceType } from "../models/Main";
import { atom } from "recoil";

export const AddDeviceModalInputsAtom = atom<AddDeviceRequestType>({
  key: "AddDeviceModalInputsAtom",
  default: {
    name: "",
    device_no: 0,
    device_type: 0,
    latitude: 0,
    longitude: 0,
  },
});

export const ChangeDeviceLocationModalInputsAtom =
  atom<ChangeLocationDeviceType>({
    key: "ChangeDeviceLocationModalInputsAtom",
    default: {
      latitude: 0,
      longitude: 0,
    },
  });
