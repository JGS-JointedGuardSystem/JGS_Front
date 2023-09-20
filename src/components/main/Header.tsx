import styled from "@emotion/styled";
import { JGSLogo } from "../../assets/icons";
import { useState } from "react";
import LogOutModal from "../auth/LogOutModal";
import SmallButton from "../common/SmallButton";
import { useTheme } from "@emotion/react";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const theme = useTheme();

  return (
    <>
      <Container>
        <LogoImg src={JGSLogo} alt="logo" />
        <Aside>
          <SmallButton
            text="로그아웃"
            color={theme.color.BLACK}
            onClick={() => setIsActive(true)}
          />
        </Aside>
      </Container>
      {isActive && <LogOutModal setIsActive={setIsActive} />}
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 65px;
  padding: 0 10vw;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  background: white;
`;

const LogoImg = styled.img`
  width: 100px;
`;

const Aside = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 30px;
`;

export default Header;
