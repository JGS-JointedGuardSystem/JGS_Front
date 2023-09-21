import styled from "@emotion/styled";
import React, { ChangeEvent, useState } from "react";
import Input from "../../common/Input";
import SmallButton from "../../common/SmallButton";
import { useTheme } from "@emotion/react";
import { useChangeDeviceName } from "../../../hooks/useChangeDeviceName";

interface DeviceChangeNameModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  deviceNumber: number;
}

const DeviceChangeName = ({
  setIsActive,
  deviceNumber,
}: DeviceChangeNameModalProps) => {
  const [text, setText] = useState<string>("");
  const theme = useTheme();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const { mutate } = useChangeDeviceName({
    device_no: deviceNumber,
    Device_new_name: text,
  });

  return (
    <Background onClick={() => setIsActive(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <div>
          <Title>새 장치 이름</Title>
          <Input
            id="1"
            name="새 장치 이름"
            type="text"
            placeholder="새 장치 이름을 입력해 주세요."
            onChange={(e) => onChange(e)}
          />
          <ButtonBox>
            <SmallButton
              text="취소"
              color={theme.color.grey400}
              onClick={() => setIsActive(false)}
            />
            <SmallButton
              text="이름변경"
              color={theme.color.BLACK}
              onClick={() => mutate()}
            />
          </ButtonBox>
        </div>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(130, 128, 128, 0.5);
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 30vw;
  height: 35vh;
  border-radius: 8px;
  background: var(--White, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 30px;
`;

const Title = styled.label`
  color: #000;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  gap: 30px;
`;

export default DeviceChangeName;
