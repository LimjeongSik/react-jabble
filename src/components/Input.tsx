import styled from "styled-components";
import { color } from "../assets/colors";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: Props) => {
    return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 16px;
    border: 1px solid ${color.gray04};
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
    font-family: "Ms-M";
    color: ${color.black04};
`;
