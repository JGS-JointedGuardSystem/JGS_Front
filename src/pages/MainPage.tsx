import Map from "../components/main/Map";
import Header from "../components/main/Header";
import styled from "@emotion/styled";
import Sidebar from "../components/main/sidebar";

const MainPage = () => {
  return (
    <>
      <Header />
      <MenuWrapper>
        <Map />
        <Sidebar />
      </MenuWrapper>
    </>
  );
};

const MenuWrapper = styled.div`
  padding: 35px 10vw;
  display: flex;
  justify-content: space-between;
`;

export default MainPage;
