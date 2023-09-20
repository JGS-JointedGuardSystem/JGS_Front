import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import SmallButton from "../../common/SmallButton";
import { useRemoveDevice } from "../../../hooks/useRemoveDevice";

interface DeviceRemoveModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  deviceName: string;
  deviceNumber: number;
}

export const DeviceRemoveModal = ({
  setIsActive,
  deviceName,
  deviceNumber,
}: DeviceRemoveModalProps) => {
  const theme = useTheme();

  const { mutate } = useRemoveDevice({
    device_no: deviceNumber,
    deviceName: deviceName,
  });

  return (
    <Background onClick={() => setIsActive(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Text>{deviceName}를 제거 하시겠습니까?</Text>
        <ButtonBlock>
          <SmallButton
            text="취소"
            onClick={() => setIsActive(false)}
            color={theme.color.grey400}
          />
          <SmallButton
            text="제거"
            onClick={() => mutate()}
            color={theme.color.BLACK}
          />
        </ButtonBlock>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;

const Container = styled.div`
  width: 500px;
  height: 260px;
  border-radius: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Text = styled.p`
  font-size: 28px;
  line-height: 30px;
  color: ${({ theme }) => theme.color.BLACK};
`;

const ButtonBlock = styled.div`
  display: flex;
  gap: 60px;
`;

export default DeviceRemoveModal;
