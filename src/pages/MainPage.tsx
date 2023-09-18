import { JGSLogo, HeadVector } from "../assets/login";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/functions/TokenManager";

const MainPage = () => {
  const navigate = useNavigate();

  const LogoutClick = () => {
    navigate("/");
    removeToken();
  };

  return (
    <div>
      <HeaderMenu>
        <LogoImg src={JGSLogo} alt="logo" />
        <Aside>
          <Bell src={HeadVector} alt="vector" />
          <LogoutBtn onClick={LogoutClick}>로그아웃</LogoutBtn>
        </Aside>
      </HeaderMenu>
      <MenuWrapper>
        <MapWrapper>여기는 지도예용~</MapWrapper>
        <Position>.</Position>
      </MenuWrapper>
    </div>
  );
};

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 65px;
  padding: 0 10vw;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
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

const Bell = styled.img`
  width: 20px;
`;

const LogoutBtn = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  color: white;
  background-color: black;
  border-radius: 10px;
  border: none;
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const MenuWrapper = styled.div`
  padding: 35px 10vw;
  display: flex;
  justify-content: space-between;
`;

const MapWrapper = styled.div`
  width: 70%;
  height: 620px;
  border-radius: 5px;
  background: var(--white, #fff);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.24);
`;

const Position = styled.div`
  width: 27%;
  height: 620px;
  border-radius: 8px;
  background: var(--white, #fff);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.24);
  overflow-y: scroll;
`;

export default MainPage;
