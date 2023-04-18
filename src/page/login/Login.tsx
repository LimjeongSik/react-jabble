import AuthFormTemplate from "../../components/AuthFormTemplate";
import { useAppSelector } from "../../hook";
import { Navigate } from "react-router-dom";

const Login = () => {
    const isLogin = useAppSelector((state) => state.userAuth.sessionId);

    return (
        <>
            {isLogin && <Navigate to="/"></Navigate>}
            <AuthFormTemplate mode="login" />
        </>
    );
};

export default Login;
