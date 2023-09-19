import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface Props {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ ...props }: Props) => {
  return <InputContainer {...props} />;
};

const InputContainer = styled.input`
  width: 100%;
  height: 63px;
  padding-left: 19px;
  padding-right: 50px;
  background-color: ${({ theme }) => theme.color.grey100};
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 17px;
`;

export default Input;
