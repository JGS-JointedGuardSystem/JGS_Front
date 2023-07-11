import { JGSLogo, HeadVector } from "../assets/login";
import styled from "@emotion/styled";

const MainPage = () => {
  return (
    <div>
      <HeaderMenu>
        <LogoImg src={JGSLogo} alt="logo" />
        <Aside>
          <Bell src={HeadVector} alt="vector" />
          <LogoutBtn>로그아웃</LogoutBtn>
        </Aside>
      </HeaderMenu>
      <MenuWrapper>
        <MapWrapper>여기는 지도예용~</MapWrapper>
        <Position>.</Position>
      </MenuWrapper>
    </div>
  );
};

const MenuWrapper = styled.div`
  padding: 35px 10vw;
  display: flex;
  justify-content: space-between;
`;

const Position = styled.div`
  width: 27%;
  height: 620px;
  border-radius: 8px;
  background: var(--white, #fff);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.24);
`;

const HeaderMenu = styled.div`
  width: 100vw;
  height: 65px;
  padding: 0 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;

const LogoImg = styled.img`
  width: 100px;
`;

const Aside = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 35px;
`;

const Bell = styled.img`
  width: 20px;
`;

const LogoutBtn = styled.button`
  padding: 9px 15px;
  font-size: 13px;
  color: white;
  background-color: black;
  border-radius: 8px;
  border: none;
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const MapWrapper = styled.div`
  width: 70%;
  height: 620px;
  border-radius: 5px;
  background: var(--white, #fff);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.24);
`;

export default MainPage;
