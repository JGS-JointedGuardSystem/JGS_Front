import styled from "@emotion/styled";

interface SmallButtonProps {
  text: string;
  onClick: () => void;
  color: string;
}

const SmallButton = ({ text, onClick, color }: SmallButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} color={color}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{ color: string }>`
  background: ${(props) => props.color};
  padding: 10px 16px;
  font-size: 14px;
  color: white;
  border-radius: 10px;
  border: none;
  width: 88px;
`;

export default SmallButton;
