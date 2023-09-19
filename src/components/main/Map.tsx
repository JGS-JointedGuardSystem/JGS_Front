import styled from "@emotion/styled";
import { useEffect } from "react";

const { kakao }: any = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(36.390906587662, 127.36218898382),
      level: 2,
    };
    new kakao.maps.Map(container, options);
  }, []);

  return <Container id="map" />;
};

const Container = styled.div`
  width: 70%;
  height: 620px;
  border-radius: 5px;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.24);
`;

export default Map;
