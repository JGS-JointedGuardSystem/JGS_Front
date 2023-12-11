import {
  AddDeviceRequestType,
  ChangeLocationDeviceType,
  DeviceStateAtomType,
} from "../models/Main";
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
      device_no: 0,
      latitude: 0,
      longitude: 0,
    },
  });

export const DeviceStateAtom = atom<DeviceStateAtomType>({
  key: "DeviceStateAtom",
  default: {
    name: "",
    device_no: 0,
    latitude: 0,
    longitude: 0,
    device_type: 0,
  },
});
