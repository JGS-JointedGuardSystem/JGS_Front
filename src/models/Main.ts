export interface AddDeviceRequestType {
  name: string; // 장치 이름
  device_no: number; // 장치 고유 번호
  device_type: string; // 장치 타입
  latitude?: number; // 위도
  longitude?: number; // 경도
}

export interface RemoveDeviceRequestType {
  device_no: number;
}

export interface RenameDeviceRequestType extends RemoveDeviceRequestType {
  new_name: string; // 새 장치 이름
}

export interface ChangeDeviceRequestType {
  device_no: number;
  latitude: number;
  longitude: number;
}

export interface AddDeviceType {
  title: string;
  name: string;
  placeholder: string;
}
