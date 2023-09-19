import Map from "../components/main/Map";
import Header from "../components/main/Header";
import styled from "@emotion/styled";

const MainPage = () => {
  return (
    <>
      <Header />
      <MenuWrapper>
        <Map />
        <Position>.</Position>
      </MenuWrapper>
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
