import styled from "@emotion/styled";

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.color.grey400};
  border: none;
  border-radius: 8px;
  width: 274px;
  height: 53px;
  color: ${({ theme }) => theme.color.WHITE};
  font-weight: 600;
  font-size: 18px;
  margin: 37px auto 0 auto;
  display: block;
  margin-bottom: 11px;
  &:hover {
    background-color: ${({ theme }) => theme.color.BLACK};
  }
  cursor: pointer;
`;

export default Button;
