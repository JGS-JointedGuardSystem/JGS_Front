type BaseDeviceType = {
  name: string;
  id?: string | number;
  device_no: number;
  device_new_name: string;
  device_type: 0 | 1;
  latitude: number;
  longitude: number;
  curr_status?: number;
  user_id?: string;
}

export type AddDeviceRequestType = Omit<BaseDeviceType, 'id' | 'device_new_name'>;

export type DeviceStateAtomType = Omit<BaseDeviceType, 'device_new_name'>;

export type RenameDeviceRequestType = Pick<BaseDeviceType, 'device_no' | 'device_new_name'>;

export type ChangeLocationDeviceType = Pick<BaseDeviceType, 'device_no' | 'latitude' | 'longitude'>;

export interface AddDeviceType {
  title: string;
  name: string;
  placeholder: string;
}