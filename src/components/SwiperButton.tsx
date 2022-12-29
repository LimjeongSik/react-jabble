import styled, { css } from "styled-components";
import { color } from "../assets/colors";

import Prev from "../assets/images/btns/btn__prev.png";
import Next from "../assets/images/btns/btn__next.png";

interface Props {
    side: "left" | "right";
    btn: () => void;
}

const SwiperButton = ({ side, btn }: Props) => {
    return (
        <>
            <SwiperButtons side={side} onClick={btn} />
        </>
    );
};

export default SwiperButton;

const SwiperButtons = styled.button<{
    side: "left" | "right";
}>`
    position: absolute;
    ${(side) => side.side}:0;
    background-color: ${color.white02};

    ${(props) =>
        props.side === "left" &&
        css`
            background-image: url(${Prev});
        `}
    ${(props) =>
        props.side === "right" &&
        css`
            background-image: url(${Next});
        `}
`;
