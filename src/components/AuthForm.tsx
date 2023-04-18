import styled from "styled-components";
import ActionsButton from "./ActionsButton";
import LabelInput from "./LabelInput";
import { useInput } from "../hooks/useInput";
import { useAppDispatch, useAppSelector } from "../hook";
import { asyncRegister } from "../slices/register";
import { useNavigate } from "react-router-dom";
import { asyncLogin } from "../slices/login";
import { asyncAuth } from "../slices/auth";

interface Props {
    mode: "login" | "register";
}

const authDescriptions = {
    login: {
        usernamePlaceholder: "아이디를 입력해주세요.",
        userpassPlaceholder: "비밀번호를 입력해주세요.",
        userpassPlaceholderChk: "",
        username: "",
        phonenumber: "",
        ButtonText: "로그인",
    },
    register: {
        usernamePlaceholder: "아이디를 입력해주세요.",
        userpassPlaceholder: "비밀번호를 입력해주세요.",
        userpassPlaceholderChk: "비밀번호를 다시 입력해주세요.",
        username: "이름을 입력해주세요.",
        phonenumber: "휴대폰 번호를 입력해주세요.",
        ButtonText: "회원가입",
    },
} as const;

const AuthForm = ({ mode }: Props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        usernamePlaceholder,
        userpassPlaceholder,
        userpassPlaceholderChk,
        ButtonText,
        username,
        phonenumber,
    } = authDescriptions[mode];

    // login input change state custom hooks
    const [loginInputId, onLoginId] = useInput("");
    const [loginInputPw, onLoginPw] = useInput("");

    // register input change state custom hooks
    const [registerInputId, onRegisterId] = useInput("");
    const [registerInputPw, onRegisterPw] = useInput("");
    const [registerInputPwChk, onRegisterPwChk] = useInput("");
    const [registerInputName, onRegisterName] = useInput("");
    const [registerInputPhone, onRegisterPhone] = useInput("");

    const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            registerInputName &&
            registerInputPhone &&
            registerInputId &&
            registerInputPw
        ) {
            if (registerInputPw === registerInputPwChk) {
                await dispatch(
                    asyncRegister({
                        name: registerInputName,
                        phone: registerInputPhone,
                        userId: registerInputId,
                        userPw: registerInputPw,
                    }),
                );
                navigate("/login");
            } else {
                alert("비밀번호를 확인해주세요.");
            }
        } else {
            alert("내용을 모두 입력해주세요.");
        }
    };
    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loginInputId && loginInputPw) {
            await dispatch(
                asyncLogin({
                    id: loginInputId,
                    pw: loginInputPw,
                }),
            )
                .then(async (res) => {
                    await dispatch(asyncAuth(res.payload.sessionId));
                })
                .catch((error) => {});
        } else {
            alert("아이디 또는 비밀번호를 모두입력해주세요.");
        }
    };

    const error = useAppSelector((state) => state.userLogin.status);

    return (
        <>
            {mode === "login" && (
                <FormStyled onSubmit={onLogin}>
                    <LabelInput
                        label="아이디"
                        placeholder={usernamePlaceholder}
                        onChange={onLoginId}
                    />
                    {error?.indexOf("아이디") === 0 ? (
                        <span className="error">{error}</span>
                    ) : null}
                    <LabelInput
                        type="password"
                        label="비밀번호"
                        placeholder={userpassPlaceholder}
                        onChange={onLoginPw}
                    />
                    {error?.indexOf("비밀번호") === 0 ? (
                        <span className="error">{error}</span>
                    ) : null}
                    <ActionsButton title={ButtonText} type="submit" />
                </FormStyled>
            )}
            {mode === "register" && (
                <FormStyled onSubmit={onRegister}>
                    <LabelInput
                        label="아이디"
                        placeholder={usernamePlaceholder}
                        onChange={onRegisterId}
                    />
                    <LabelInput
                        type="password"
                        label="비밀번호"
                        placeholder={userpassPlaceholder}
                        onChange={onRegisterPw}
                    />
                    <LabelInput
                        type="password"
                        label="비밀번호 재입력"
                        placeholder={userpassPlaceholderChk}
                        onChange={onRegisterPwChk}
                    />
                    <LabelInput
                        type="text"
                        label="이름"
                        placeholder={username}
                        onChange={onRegisterName}
                    />
                    <LabelInput
                        type="phone"
                        label="전화번호"
                        placeholder={phonenumber}
                        onChange={onRegisterPhone}
                    />
                    <ActionsButton title={ButtonText} type="submit" />
                </FormStyled>
            )}
        </>
    );
};

export default AuthForm;

const FormStyled = styled.form`
    .error {
        font-size: 13px;
        color: red;
    }
`;
