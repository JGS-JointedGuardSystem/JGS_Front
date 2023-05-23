import styled from "@emotion/styled";

const Button = ({ text }: { text: string }) => {
  return <ButtonContainer>{text}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.grey400};
  border: none;
  border-radius: 8px;
  width: 274px;
  height: 53px;
  color: ${({ theme }) => theme.WHITE};
  font-weight: 600;
  font-size: 18px;
  margin: 37px auto 0 auto;
  display: block;
  margin-bottom: 11px;
  &:hover {
    background-color: ${({ theme }) => theme.BLACK};
  }
  cursor: pointer;
`;

export default Button;
