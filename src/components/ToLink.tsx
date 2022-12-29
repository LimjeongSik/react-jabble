import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "../assets/colors";

interface Props {
    mode: "login" | "register";
}

const isModeDescriptions = {
    login: {
        to: "/register",
        link: "회원가입",
        description: "아직 회원이 아니신가요?",
    },
    register: {
        to: "/login",
        link: "로그인",
        description: "가입한 아이디가 있으신가요?",
    },
} as const;

const ToLink = ({ mode }: Props) => {
    const { to, link, description } = isModeDescriptions[mode];

    return (
        <Block>
            <span>{description}</span>
            <Link to={to}>{link}</Link>
        </Block>
    );
};

export default ToLink;

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 50px;
    span {
        font-size: 15px;
        font-family: "Ms-B";
        color: ${color.gray08};
    }
    a {
        font-size: 16px;
        font-family: "Ms-B";
        color: ${color.black03};
    }
`;
