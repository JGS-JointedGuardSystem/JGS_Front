import {
  AddDeviceRequestType,
  ChangeDeviceRequestType,
  RenameDeviceRequestType,
} from "../../../models/Main";
import instance from "../../axios";

export const addDevice = async (request: AddDeviceRequestType) => {
  return await instance.post("/add_device", request);
};

export const removeDevice = async (deviceNumber: number) => {
  return await instance.post("/remove_device", { device_no: deviceNumber });
};

export const renameDevice = async (request: RenameDeviceRequestType) => {
  return await instance.post("/rename_device", request);
};

export const changeDevice = async (request: ChangeDeviceRequestType) => {
  return await instance.post("/move_device", request);
};
