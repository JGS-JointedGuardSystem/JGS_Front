import styled from "@emotion/styled";
import { DeleteIcon } from "../../../assets/icons";
import Location from "./Location";
import { useState } from "react";
import DeviceRemoveModal from "./DeviceRemoveModal";

interface SidebarProps {
  deviceName: string;
  deviceNumber: number;
  latitude: number;
  longitude: number;
}

const DeviceInfo = ({
  deviceName,
  deviceNumber,
  latitude,
  longitude,
}: SidebarProps) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  return (
    <>
      <Container>
        <div>
          <DeviceName>{deviceName}</DeviceName>
          <img
            src={DeleteIcon}
            alt="쓰레기통"
            onClick={() => setIsModalActive(true)}
          />
        </div>
        <Location latitude={latitude} longitude={longitude} />
      </Container>
      {isModalActive && (
        <DeviceRemoveModal
          deviceName={deviceName}
          deviceNumber={deviceNumber}
          setIsActive={setIsModalActive}
        />
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  :hover {
    background-color: ${({ theme }) => theme.color.grey100};
  }
  > img {
    width: 20px;
  }
  > div {
    display: flex;
    width: inherit;
    justify-content: space-between;
  }
`;

const DeviceName = styled.p`
  color: #245ae7;
  font-weight: 600;
  font-size: 25px;
`;

export default DeviceInfo;
