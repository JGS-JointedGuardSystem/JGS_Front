import styled from "@emotion/styled";
import Input from "../common/Input";
import { useState } from "react";
import SmallButton from "../common/SmallButton";
import { usePasswordVerification } from "../../hooks/usePasswordVerification";
interface LogOutModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  deviceName: string;
}

export const ErrorModal = ({ setIsActive, deviceName }: LogOutModalProps) => {
  const [password, setPassword] = useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const { mutate } = usePasswordVerification({
    password: password,
    setIsActive: setIsActive,
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
  background: rgba(255, 3, 3, 0.5);
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
  padding: 40px;
  height: 260px;
  border-radius: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Text = styled.p`
  font-size: 25px;
  line-height: 30px;
  color: ${({ theme }) => theme.color.BLACK};
`;

export default ErrorModal;
