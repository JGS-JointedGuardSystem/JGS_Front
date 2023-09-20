import {
  AddDeviceRequestType,
  ChangeDeviceRequestType,
  RemoveDeviceRequestType,
  RenameDeviceRequestType,
} from "../../../models/Main";
import instance from "../../axios";

export const addDevice = async (request: AddDeviceRequestType) => {
  return await instance.post("/add_device", request);
};

export const removeDevice = async (request: RemoveDeviceRequestType) => {
  return await instance.post("/remove_device", request);
};

export const renameDevice = async (request: RenameDeviceRequestType) => {
  return await instance.post("/remove_device", request);
};

export const changeDevice = async (request: ChangeDeviceRequestType) => {
  return await instance.post("/move_device", request);
};
