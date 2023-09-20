import Map from "../components/main/Map";
import Header from "../components/main/Header";
import styled from "@emotion/styled";
import { useState } from "react";
import ErrorModal from "../components/main/ErrorModal";
import Sidebar from "../components/main/sidebar";

const MainPage = () => {
  const [isErrorActive, setIsErrorActive] = useState<boolean>(false);

  return (
    <>
      <Header />
      <MenuWrapper>
        <Map />
        <Sidebar />
      </MenuWrapper>
      {isErrorActive && (
        <ErrorModal setIsActive={setIsErrorActive} deviceName="김현민" />
      )}
    </>
  );
};

const MenuWrapper = styled.div`
  padding: 35px 10vw;
  display: flex;
  justify-content: space-between;
`;

export default MainPage;
