import styled from "styled-components";
import Input, { type Props as InputProps } from "./Input";
import { color } from "../assets/colors";

interface Props extends InputProps {
    label: string;
}

const LabelInput = ({ label, ...rest }: Props) => {
    return (
        <Block>
            <label>{label}</label>
            <Input {...rest} />
        </Block>
    );
};

export default LabelInput;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    gap: 9px;
    label {
        font-size: 16px;
        font-family: "Ms-SB";
        color: ${color.black04};
    }
`;
