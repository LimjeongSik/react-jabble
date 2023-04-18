import { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../assets/colors";
import { useAppSelector } from "../hook";
import IsearchW from "../assets/images/icons/ic__search_w.png";
import HeaderMenuList from "./HeaderMenuList";

const HeaderToggleMenu = () => {
    const loginCheck = useAppSelector((state) => state.userAuth.sessionId);
    const username = useAppSelector((state) => state.userAuth.username);
    const [on, setOn] = useState(false);

    const onToggleButtons: React.MouseEventHandler<HTMLDivElement> = () => {
        setOn(!on);
    };
    const ButtonDisabled: React.MouseEventHandler<HTMLAnchorElement> = () => {
        setOn(false);
    };

    const toggleMenuClose = useCallback(() => {
        if (window.innerWidth >= 975) {
            return setOn(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", toggleMenuClose);

        return () => {
            window.removeEventListener("resize", toggleMenuClose);
        };
    }, [toggleMenuClose]);
    return (
        <>
            <MenuButton onClick={onToggleButtons} toggle={on}>
                <span></span>
                <span></span>
                <span></span>
            </MenuButton>
            <ToggleMenu toggle={on}>
                <div>
                    <div>
                        {loginCheck ? (
                            <ProfileBox>
                                <Profile>
                                    <Link to="/mypage" onClick={ButtonDisabled}>
                                        <ProfileImage />
                                        <h6>{username}</h6>
                                    </Link>
                                </Profile>
                                <Link to="/mypage" onClick={ButtonDisabled}>
                                    mypage
                                </Link>
                            </ProfileBox>
                        ) : (
                            <Link to="/login" onClick={ButtonDisabled}>
                                Login
                            </Link>
                        )}
                    </div>
                    <input type="text" placeholder="Search" />
                    <HeaderMenuList
                        ButtonDisabled={ButtonDisabled}
                        tog="none"
                        drop={true}
                    />
                </div>
            </ToggleMenu>
        </>
    );
};

export default HeaderToggleMenu;

const MenuButton = styled.div<{ toggle: boolean }>`
    display: none;
    position: relative;
    width: 35px;
    height: 25px;
    margin-right: 20px;
    cursor: pointer;
    span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 3px;
        border-radius: 3px;
        background-color: ${color.black03};
        transition: transform 0.3s, opacity 0.3s, left 0.3s;
    }
    span:nth-child(1) {
        top: 0;
        ${(props) =>
            props.toggle &&
            css`
                top: 11px;
                transform: rotate(-135deg);
            `}
    }
    span:nth-child(2) {
        top: 11px;

        ${(props) =>
            props.toggle &&
            css`
                transform: rotate(135deg);
            `}
    }
    span:nth-child(3) {
        bottom: 0;
        ${(props) =>
            props.toggle &&
            css`
                opacity: 0;
                left: 100%;
            `}
    }
    @media screen and (max-width: 975px) {
        display: block;
    }
    @media screen and (max-width: 768px) {
        width: 30px;
        height: 20px;
        span:nth-child(1) {
            ${(props) =>
                props.toggle &&
                css`
                    top: 8.5px;
                    transform: rotate(-135deg);
                `}
        }
        span:nth-child(2) {
            top: 8.5px;
        }
    }
`;
const ToggleMenu = styled.div<{ toggle: boolean }>`
    position: absolute;
    right: -100%;
    top: 80px;
    width: 100%;
    height: calc(100vh - 80px);
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, right 0.3s;
    & > div {
        position: absolute;
        right: -100%;
        top: 0;
        width: 70%;
        height: 100%;
        background: ${color.white02};
        box-shadow: -2px 15px 15px 0px rgba(0, 0, 0, 0.2);
        padding: 20px;
        box-sizing: border-box;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, right 0.3s;
        transition-delay: 0.2s;
        ${(props) =>
            props.toggle &&
            css`
                right: 0;
                opacity: 1;
                visibility: visible;
            `}
        input {
            width: 100%;
            height: 42px;
            padding: 12px 12px 12px 52px;
            border-radius: 5px;
            border: 1px solid ${color.gray01};
            box-sizing: border-box;
            background-image: url(${IsearchW});
            background-repeat: no-repeat;
            background-size: 20px 20px;
            background-position: 16px 50%;
            font-size: 14px;
            font-family: "Ms-R";
            margin-top: 20px;
        }
        input::placeholder {
            color: ${color.gray04};
            font-family: "Ms-R";
        }
        & > div {
            text-align: right;
            a {
                height: 100%;
                font-size: 16px;
                color: ${color.gray08};
                font-family: "Ms-R";
            }
        }
        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 20px;
            height: auto;
            li {
                height: inherit;
                a {
                    display: flex;
                    align-items: center;
                    height: inherit;
                    font-size: 18px;
                    color: ${color.black03};
                    font-family: "Ms-M";
                    padding: 5px 0;
                    margin: 5px 0;
                    &::before {
                        display: none;
                    }
                }
            }
        }
    }
    ${(props) =>
        props.toggle &&
        css`
            right: 0;
            opacity: 1;
            visibility: visible;
        `}
    @media screen and (max-width: 768px) {
        top: 60px;
    }
`;
const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Profile = styled.div`
    a {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-items: center;
        gap: 5px;
        h6 {
            font-size: 12px;
        }
    }
`;
const ProfileImage = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    background: ${color.gray01};
`;
