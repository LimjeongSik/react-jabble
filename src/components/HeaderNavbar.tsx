import HeaderPopup from "./HeaderPopup";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "../assets/colors";
import Logo from "../assets/images/logo/logo.png";
import IsearchW from "../assets/images/icons/ic__search_w.png";
import HeaderToggleMenu from "./HeaderToggleMenu";
import HeaderMenuList from "./HeaderMenuList";

const HeaderNavbar = () => {
    return (
        <>
            <Block>
                <HeaderPopup />
                <HeaderNavbarBox>
                    <HeaderNavL>
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="Jabble" />
                            </Link>
                        </div>
                        <HeaderMenuList />
                    </HeaderNavL>
                    <HeaderNavR>
                        <input type="text" placeholder="Search" />
                        <Link to="/login">Login</Link>
                    </HeaderNavR>
                    <HeaderToggleMenu />
                </HeaderNavbarBox>
            </Block>
            <PaddingBlock />
        </>
    );
};

export default HeaderNavbar;

const Block = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: ${color.white01};
    box-sizing: border-box;
    z-index: 9999;
    border-bottom: 1px solid ${color.gray02};
`;
const HeaderNavbarBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    height: 80px;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        height: 60px;
    }
`;
const HeaderNavL = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    .logo {
        height: 100%;
        a {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 20px;
            margin-right: 10px;
        }
        img {
            width: 107px;
            height: 25px;
            @media screen and (max-width: 768px) {
                width: 80px;
                height: 20px;
            }
        }
    }
    ul {
        display: flex;
        align-items: center;
        height: 100%;
        li {
            height: inherit;
            a {
                display: flex;
                align-items: center;
                height: inherit;
                font-size: 18px;
                color: ${color.black03};
                font-family: "Ms-M";
                padding: 0 17px;
                margin: 0 17px;
            }
        }
        @media screen and (max-width: 975px) {
            display: none;
        }
    }
`;
const HeaderNavR = styled.div`
    height: 100%;
    input {
        width: 280px;
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
    }
    input::placeholder {
        color: ${color.gray04};
        font-family: "Ms-R";
    }
    & > a {
        display: inline-flex;
        align-items: center;
        height: 100%;
        font-size: 16px;
        color: ${color.gray08};
        font-family: "Ms-R";
        margin: 0 20px 0 30px;
    }
    @media screen and (max-width: 975px) {
        display: none;
    }
`;
const PaddingBlock = styled.div`
    padding-bottom: 120px;
    @media screen and (max-width: 768px) {
        padding-bottom: 100px;
    }
`;
