import styled from "styled-components";
import { color } from "../../assets/colors";
import MainTitle from "../../components/MainTitle";
import { useAppSelector, useAppDispatch } from "../../hook";
import { asyncLogout } from "../../slices/logout";
import { useCallback, useState, useEffect } from "react";
import { loginCheck } from "../../slices/auth";
import { Cookies } from "react-cookie";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import MypageContent from "../../components/MypageContent";

const cookie = new Cookies();

const Mypage = () => {
    const location = useLocation();
    const [sizeBoolean, setSizeBoolean] = useState<boolean>();
    const navigate = useNavigate();
    const username = useAppSelector((state) => state.userAuth.username);
    const isLogin = useAppSelector((state) => state.userAuth.sessionId);
    const dispatch = useAppDispatch();
    const onLogout = useCallback(() => {
        dispatch(asyncLogout());
        cookie.remove("user", { path: "/" });
        dispatch(loginCheck());
        navigate("/");
    }, [dispatch, navigate]);

    useEffect(() => {
        onSizeBoolean();
        window.addEventListener("load", onSizeBoolean);
        window.addEventListener("resize", onSizeBoolean);

        return () => {
            window.removeEventListener("load", onSizeBoolean);
            window.removeEventListener("resize", onSizeBoolean);
        };
    }, []);

    const onSizeBoolean = () => {
        if (window.innerWidth <= 960) {
            setSizeBoolean(true);
        } else {
            setSizeBoolean(false);
        }
    };

    return (
        <>
            {isLogin ? (
                <>
                    {location.pathname === "/mypage" && (
                        <Block>
                            <MyPageStyle>
                                <MainTitle title="Mypage" />
                                <MyInfoPage>
                                    <MyInfoTabs>{username}</MyInfoTabs>
                                    <MypageContent />
                                    <LogoutButton onClick={onLogout}>
                                        로그아웃
                                    </LogoutButton>
                                </MyInfoPage>
                            </MyPageStyle>
                            <Outlet />
                        </Block>
                    )}
                    {!sizeBoolean && location.pathname !== "/mypage" ? (
                        <Block>
                            <MyPageStyle>
                                <MainTitle title="Mypage" />
                                <MyInfoPage>
                                    <MyInfoTabs>{username}</MyInfoTabs>
                                    <MypageContent />
                                    <LogoutButton onClick={onLogout}>
                                        로그아웃
                                    </LogoutButton>
                                </MyInfoPage>
                            </MyPageStyle>
                            <Outlet />
                        </Block>
                    ) : (
                        <Outlet />
                    )}
                </>
            ) : null}
        </>
    );
};

export default Mypage;

const Block = styled.div`
    width: 100%;
    max-width: 1400px;
    min-height: 100%;
    margin: 30px auto;
    padding: 0 20px;
    display: flex;
    align-items: flex-end;
    gap: 20px;
    box-sizing: border-box;
`;
const MyPageStyle = styled.div`
    height: inherit;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    min-height: 100vh;
    box-sizing: border-box;
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;
const MyInfoPage = styled.div`
    min-width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border: 1px solid ${color.gray02};
    border-radius: 10px;
    padding: 20px 10px;
    box-sizing: border-box;
    @media screen and (max-width: 960px) {
        width: 100%;
        height: min-content;
    }
`;
const MyInfoTabs = styled.div`
    margin-bottom: 20px;
    @media screen and (max-width: 960px) {
        margin-bottom: 0;
        margin-right: 20px;
    }
`;
const LogoutButton = styled.button`
    display: block;
    background: ${color.black02};
    color: ${color.white01};
    width: 100%;
    padding: 15px 0;
    border-radius: 5px;
`;
