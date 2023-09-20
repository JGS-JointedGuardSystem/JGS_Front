import styled from "@emotion/styled";
import DeviceInfo from "./DeviceInfo";
import SmallButton from "../../common/SmallButton";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import AddDeviceModal from "../AddDeviceModal";

const Sidebar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const theme = useTheme();

  return (
    <>
      <Container>
        <SmallButton
          text="장치 추가"
          onClick={() => setIsActive(true)}
          color={theme.color.BLACK}
        />
        <DeviceInfo
          deviceName="김현민 01"
          deviceNumber={2304}
          latitude={36.390906587662}
          longitude={127.36218898382}
        />
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
