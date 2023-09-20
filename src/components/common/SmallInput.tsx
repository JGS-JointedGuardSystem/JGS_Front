import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface Props {
  id: string;
  type: string;
  name?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SmallInput = ({ ...props }: Props) => {
  return <InputContainer {...props} />;
};

const InputContainer = styled.input`
  width: 100%;
  height: 63px;
  padding: 0 19px;
  background-color: ${({ theme }) => theme.color.grey100};
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 17px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
  }
`;

export default SmallInput;
