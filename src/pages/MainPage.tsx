import Map from "../components/main/Map";
import Header from "../components/main/Header";
import styled from "@emotion/styled";
import { useState } from "react";
import ErrorModal from "../components/main/ErrorModal";

const MainPage = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <Header />
      <MenuWrapper>
        <Map />
        <Position>.</Position>
      </MenuWrapper>
      {isActive && <ErrorModal setIsActive={setIsActive} deviceName="김현민" />}
    </>
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
  overflow-y: scroll;
`;

export default MainPage;
