import styled from "@emotion/styled";

interface LocationProps {
  latitude: number;
  longitude: number;
}

const Location = ({ latitude, longitude }: LocationProps) => {
  return (
    <Container>
      <div>
        <LatitudeBox>위</LatitudeBox>
        <p>{latitude}</p>
      </div>
      <div>
        <LongitudeBox>경</LongitudeBox>
        <p>{longitude}</p>
      </div>
    </Container>
  );
};

const LatitudeBox = styled.span`
  min-width: 30px;
  min-height: 30px;
  background: #f6e4ff;
  color: #783df6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LongitudeBox = styled.span`
  min-width: 30px;
  min-height: 30px;
  background: #c5f5ff;
  color: #4374f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  > p {
    color: black;
    font-size: 18px;
    line-height: 30px;
  }
`;

export default Location;
