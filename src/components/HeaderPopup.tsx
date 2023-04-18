import styled from "styled-components";
import { color } from "../assets/colors";
import { Link } from "react-router-dom";
const HeaderPopup = () => {
    return (
        <Block>
            <Link to="/register">
                Jabble 신규 회원가입 하고 <span>혜택</span> 받자!
            </Link>
        </Block>
    );
};

export default HeaderPopup;

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${color.black03};
    padding: 12px 0;
    height: 40px;
    box-sizing: border-box;
    a {
        font-size: 13px;
        letter-spacing: -0.03px;
        font-family: "Ms-SB";
        color: ${color.white01};
        span {
            color: ${color.orange};
        }
    }
`;
