import styled from "@emotion/styled";
import {
  ChangeLocationIcon,
  DeleteIcon,
  RenameIcon,
} from "../../../assets/icons";
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
  const [isRemoveModalActive, setIsRemoveModalActive] =
    useState<boolean>(false);
  const [isRenameModalActive, setIsRenameModalActive] =
    useState<boolean>(false);
  const [isLocationModalActive, setIsLocationModalActive] =
    useState<boolean>(false);

  return (
    <>
      <Container>
        <div>
          <DeviceName>{deviceName}</DeviceName>
          <ImgBox>
            <img
              src={RenameIcon}
              alt="이름 변경"
              onClick={() => setIsRenameModalActive(true)}
            />
            <img
              src={ChangeLocationIcon}
              alt="위치 변경"
              onClick={() => setIsLocationModalActive(true)}
            />
            <img
              src={DeleteIcon}
              alt="쓰레기통"
              onClick={() => setIsRemoveModalActive(true)}
            />
          </ImgBox>
        </div>
        <Location latitude={latitude} longitude={longitude} />
      </Container>
      {isRemoveModalActive && (
        <DeviceRemoveModal
          deviceName={deviceName}
          deviceNumber={deviceNumber}
          setIsActive={setIsRemoveModalActive}
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

const ImgBox = styled.div`
  display: flex;
  gap: 20px;
`;

export default DeviceInfo;
