import { AddDeviceRequestType } from "../../../models/Main";
import instance from "../../axios";

export const addDevice = async (request: AddDeviceRequestType) => {
  return await instance.post("/add_device", request);
};
