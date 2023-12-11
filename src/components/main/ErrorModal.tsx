import styled from "@emotion/styled";
import Input from "../common/Input";
import { useState } from "react";
import SmallButton from "../common/SmallButton";
import { usePasswordVerification } from "../../hooks/usePasswordVerification";

interface LogOutModalProps {
  setIsOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
  deviceName: string;
}

export const ErrorModal = ({ setIsOpenAlert, deviceName }: LogOutModalProps) => {
  const [password, setPassword] = useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const { mutate } = usePasswordVerification({
    password,
    setIsOpenAlert,
  });

  return (
    <Background>
      <Container>
        <Text>📣 {deviceName}이 밟혔습니다.</Text>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호 입력해주세요."
          onChange={(e) => onChangeInput(e)}
        />
        <SmallButton text="확인" onClick={mutate} color="red" />
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(255, 3, 3, 0.5);
`;

const Container = styled.div`
  width: 500px;
  padding: 40px;
  height: 260px;
  border-radius: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const Text = styled.p`
  font-size: 25px;
  line-height: 30px;
  color: ${({ theme }) => theme.color.BLACK};
`;

export default ErrorModal;
