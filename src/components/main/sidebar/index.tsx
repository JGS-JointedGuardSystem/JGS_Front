import styled from "@emotion/styled";
import DeviceInfo from "./DeviceInfo";
import SmallButton from "../../common/SmallButton";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import AddDeviceModal from "../AddDeviceModal";
import { useSocket } from "../../../hooks/useSocket";
import { AddDeviceRequestType } from "../../../models/Main";

const Sidebar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const theme = useTheme();

  const { getDeviceList, connect, disconnect, deviceData } = useSocket();

  useEffect(() => {
    connect();
    window.onbeforeunload = () => disconnect();
  }, [connect, disconnect]);

  useEffect(() => {
    getDeviceList();
  }, [getDeviceList])

  return (
    <>
      <Container>
        <SmallButton
          text="장치 추가"
          onClick={() => setIsActive(true)}
          color={theme.color.BLACK}
        />
          <DeviceInfo 
            deviceName="김현민1더미값입니다~~~~~!!!^^"
            deviceNumber={2307}
            latitude={123.123}
            longitude={124.124}
          />
        {deviceData.map((item: AddDeviceRequestType, index: number) => (
          <DeviceInfo 
            key={index}
            deviceName={item.name}
            deviceNumber={item.device_no}
            latitude={item.latitude}
            longitude={item.longitude}
          />
        ))}
      </Container>
      {isActive && <AddDeviceModal setIsOpen={setIsActive} />}
    </>
  );
};

const Container = styled.div`
  width: 35%;
  height: 85vh;
  border-radius: 8px;
  background: white;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.24);
  overflow-y: scroll;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: end;
`;

export default Sidebar;
