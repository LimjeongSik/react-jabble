import styled from "styled-components";
import ActionsButton from "./ActionsButton";
import LabelInput from "./LabelInput";

interface Props {
    mode: "login" | "register";
}

const authDescriptions = {
    login: {
        usernamePlaceholder: "로그인할 아이디",
        userpassPlaceholder: "로그인할 비밀번호",
        ButtonText: "로그인",
    },
    register: {
        usernamePlaceholder: "가입할 아이디",
        userpassPlaceholder: "가입할 비밀번호",
        ButtonText: "회원가입",
    },
} as const;

const AuthForm = ({ mode }: Props) => {
    const { usernamePlaceholder, userpassPlaceholder, ButtonText } =
        authDescriptions[mode];
    return (
        <Block>
            <LabelInput label="아이디" placeholder={usernamePlaceholder} />
            <LabelInput
                type="password"
                label="비밀번호"
                placeholder={userpassPlaceholder}
            />
            <ActionsButton title={ButtonText} />
        </Block>
    );
};

export default AuthForm;

const Block = styled.div``;
