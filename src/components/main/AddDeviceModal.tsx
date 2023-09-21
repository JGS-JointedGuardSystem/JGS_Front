import React from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { useTheme } from "@emotion/react";
import Input from "../common/Input";
import SmallInput from "../common/SmallInput";
import { AddDeviceInputData, CoordinatesInputData } from "../../constants";
import { AddDeviceRequestType, AddDeviceType } from "../../models/Main";
import { AddDeviceModalInputsAtom } from "../../atom/deviceAtom";
import SmallButton from "../common/SmallButton";
import { useAddDevice } from "../../hooks/useAddDevice";

interface AddDeviceModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddDeviceModal = ({ setIsOpen }: AddDeviceModalProps) => {
  const theme = useTheme();
  const [inputs, setInputs] = useRecoilState<AddDeviceRequestType>(
    AddDeviceModalInputsAtom
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { mutate } = useAddDevice(inputs);

  return (
    <ModalWrapper onClick={() => setIsOpen(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <InputWrapper>
          {AddDeviceInputData.map((item: AddDeviceType) => (
            <div key={item.title}>
              <Title htmlFor={item.name}>{item.title}</Title>
              <Input
                id={item.name}
                name={item.name}
                placeholder={item.placeholder}
                onChange={(e) => onChange(e)}
                type="text"
              />
            </div>
          ))}
        </InputWrapper>
        <CoordinatesWrapper>
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
        </CoordinatesWrapper>
        <ButonBox>
          <SmallButton
            text="취소"
            color={theme.color.grey400}
            onClick={() => setIsOpen(false)}
          />
          <SmallButton text="추가" color={theme.color.BLACK} onClick={mutate} />
        </ButonBox>
      </Container>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: rgba(130, 128, 128, 0.5);
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Container = styled.div`
  width: 30vw;
  height: 75vh;
  border-radius: 8px;
  background: var(--White, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px 30px;
`;

const Title = styled.label`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CoordinatesWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const ButonBox = styled.div`
  display: flex;
  padding-top: 20px;
  gap: 20px;
`;

export default AddDeviceModal;
