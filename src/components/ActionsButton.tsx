import styled from "styled-components";
import { color } from "../assets/colors";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ActionsButton = ({ title }: Props) => {
    return <StyledButton>{title}</StyledButton>;
};

export default ActionsButton;

const StyledButton = styled.button`
    width: 100%;
    height: 48px;
    font-size: 14px;
    background: ${color.black04};
    text-align: center;
    color: ${color.white02};
    border-radius: 4px;
    margin-top: 40px;
`;
