import styled from "@emotion/styled";
import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { useTheme } from "@emotion/react";

import SmallInput from "../../common/SmallInput";
import SmallButton from "../../common/SmallButton";
import { CoordinatesInputData } from "../../../constants";
import { ChangeDeviceLocationModalInputsAtom } from "../../../atom/deviceAtom";
import { ChangeLocationDeviceType, AddDeviceType } from "../../../models/Main";
import { useChangeDeviceLocation } from "../../../hooks/useChangeDeviceLocation";
import toast from "react-hot-toast";

interface DeviceChangeLocationModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  latitude: number;
  longitude: number;
  deviceNumber: number;
}

const DeviceChangeLocation = ({
  setIsActive,
  deviceNumber,
}: DeviceChangeLocationModalProps) => {
  const theme = useTheme();
  const [inputs, setInputs] = useRecoilState<ChangeLocationDeviceType>(
    ChangeDeviceLocationModalInputsAtom
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { mutate } = useChangeDeviceLocation({
    device_no: deviceNumber,
    latitude: inputs.latitude,
    longitude: inputs.longitude,
  });

  const CheckInputs = () => {
    const latitudeInput = inputs.latitude.toString().trim();
    const longitudeInput = inputs.longitude.toString().trim();

    if (
      latitudeInput === "" ||
      longitudeInput === "" ||
      isNaN(parseFloat(latitudeInput)) ||
      isNaN(parseFloat(longitudeInput))
    ) {
      toast.error(
        `입력한 값이 숫자가 아니거나 공백이 포함되어 있습니다. 다시 입력해주세요.`,
        {
          duration: 1500,
        }
      );
      return false;
    }
    return true;
  };

  console.log(mutate);

  return (
    <Background onClick={() => setIsActive(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <InputWrapper>
          {CoordinatesInputData.map((item: AddDeviceType) => (
            <div key={item.title}>
              <Title htmlFor={item.name}>{item.title}</Title>
              <SmallInput
                id={item.name}
                name={item.name}
                placeholder={item.placeholder}
                onChange={(e) => onChange(e)}
                type="text"
              />
            </div>
          ))}
        </InputWrapper>
        <div>
          <ButtonBox>
            <SmallButton
              text="취소"
              color={theme.color.grey400}
              onClick={() => setIsActive(false)}
            />
            <SmallButton
              text="위치변경"
              color={theme.color.BLACK}
              onClick={() => {
                if (CheckInputs()) {
                  mutate();
                  setIsActive(false); 
                }
              }}
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

const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export default DeviceChangeLocation;
