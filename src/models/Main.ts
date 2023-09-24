export interface AddDeviceRequestType {
  name: string; // 장치 이름
  device_no: number; // 장치 고유 번호
  device_type: 0 | 1; // 장치 타입
  latitude: number; // 위도
  longitude: number; // 경도
}

export interface RenameDeviceRequestType {
  device_no: number;
  device_new_name: string;
}

export interface ChangeLocationDeviceType {
  device_no: number;
  latitude: number;
  longitude: number;
}

export interface AddDeviceType {
  title: string;
  name: string;
  placeholder: string;
}
