import styled from "styled-components";
import AuthForm from "./AuthForm";
import MainTitle from "./MainTitle";
import ToLink from "./ToLink";

interface Props {
    mode: "login" | "register";
}

const AuthFormTemplate = ({ mode }: Props) => {
    const isMode = mode === "register";
    return (
        <Block>
            <BlockContent>
                <MainTitle title={isMode ? "Reigster" : "Login"} />
                <AuthForm mode={mode} />
                <ToLink mode={mode} />
            </BlockContent>
        </Block>
    );
};

export default AuthFormTemplate;

const Block = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    max-width: 1400px;
    margin: 100px auto;
    padding: 0 20px;
    box-sizing: border-box;
    @media screen and (max-width: 500px) {
        margin: 30px auto;
    }
`;
const BlockContent = styled.div`
    flex: 1;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    @media screen and (max-width: 500px) {
        padding: 0;
    }
`;
