import styled from "styled-components";
import { color } from "../../assets/colors";
import { useNavigate } from "react-router-dom";

import BackButton from "../../assets/images/btns/btn__back.png";
import { useCallback } from "react";

interface Props {
    myPageView: React.ReactNode;
}

const MypageTemplate = ({ myPageView }: Props) => {
    const navigate = useNavigate();
    const onBack = useCallback(() => {
        navigate("/mypage");
    }, [navigate]);

    return (
        <Block>
            <BackButtonStyled img={BackButton} onClick={onBack} />
            {myPageView}
        </Block>
    );
};

export default MypageTemplate;

const Block = styled.div`
    flex: 1;
    min-height: 100vh;
    border: 1px solid ${color.gray02};
    border-radius: 10px;
    padding: 20px 10px;
    box-sizing: border-box;
    @media screen and (max-width: 960px) {
        border-radius: 0;
        border: none;
        & > div {
            height: 100vh;
            border: 1px solid ${color.gray02};
            border-radius: 10px;
            padding: 20px 10px;
            box-sizing: border-box;
        }
    }
`;

const BackButtonStyled = styled.button<{ img: string }>`
    width: 30px;
    height: 30px;
    background-color: ${color.white01};
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin-bottom: 20px;
    @media screen and (min-width: 960px) {
        display: none;
    }
`;
