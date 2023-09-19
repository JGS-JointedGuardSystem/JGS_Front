import styled from "@emotion/styled";
import SmallButton from "../common/SmallButton";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { loginInputsAtom } from "../../atom/authAtom";
import { removeToken } from "../../utils/functions/TokenManager";

interface LogOutModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LogOutModal = ({ setIsActive }: LogOutModalProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const setInput = useSetRecoilState(loginInputsAtom);

  const onLogoutClick = () => {
    navigate("/");
    removeToken();
    setInput({
      id: "",
      password: "",
    });
  };

  return (
    <Background onClick={() => setIsActive(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Text>로그아웃 하시겠습니까?</Text>
        <ButtonBlock>
          <SmallButton
            text="취소"
            onClick={() => setIsActive(false)}
            color={theme.color.grey400}
          />
          <SmallButton
            text="로그아웃"
            onClick={onLogoutClick}
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

export default LogOutModal;
