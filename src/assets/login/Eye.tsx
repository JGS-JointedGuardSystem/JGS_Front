import styled from "@emotion/styled";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props {
  isShowPassword: boolean;
  onClick: () => void;
}

const Eye = ({ isShowPassword, onClick }: Props) => {
  return (
    <EyeContainer onClick={onClick}>
      {isShowPassword ? <FaEyeSlash /> : <FaEye />}
    </EyeContainer>
  );
};

const EyeContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 20px;
  cursor: pointer;
`;

export default Eye;
