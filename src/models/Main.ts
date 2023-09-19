export interface AddDeviceRequestType {
  name: string; //장치 이름
  device_no: number; //장치 고유 번호
  device_type: string; //장치 타입
  latitude: number; //위도
  longitude: number; //경도
}
