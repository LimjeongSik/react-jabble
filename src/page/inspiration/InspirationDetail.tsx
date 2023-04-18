import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { color } from "../../assets/colors";
import { useCallback } from "react";

interface Props {
    item: {
        id: number;
        title: string;
        description: string;
        img: string;
        genre: string;
        date: string;
        name: string;
        contentTitle: string;
        content: string;
    };
}

const InspirationDetail = ({ item }: Props) => {
    const navigate = useNavigate();

    const backButton = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const {
        title,
        description,
        img,
        genre,
        date,
        name,
        contentTitle,
        content,
    } = item;
    return (
        <>
            <Block>
                <BannerStyled img={img}>
                    <BannerConentStyled>
                        <small>{genre}</small>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div>
                            <span>{date}</span>
                            <div className="line"></div>
                            <span>{name}</span>
                        </div>
                    </BannerConentStyled>
                </BannerStyled>
                <ContentBox>
                    <h3>{contentTitle}</h3>
                    <span>{content}</span>
                    <div>
                        <ButtonStyled onClick={backButton}>
                            목록으로
                        </ButtonStyled>
                    </div>
                </ContentBox>
            </Block>
        </>
    );
};

export default InspirationDetail;

const Block = styled.div`
    min-height: 100%;
`;
const BannerStyled = styled.div<{ img: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 560px;
    ${(props) =>
        props.img &&
        css`
            background: url(${props.img}) no-repeat center / cover;
        `}
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        filter: blur(2px);
    }
    @media screen and (max-width: 768px) {
        height: 420px;
    }
`;
const BannerConentStyled = styled.div`
    position: relative;
    width: 100%;
    max-width: 840px;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
    color: ${color.white01};
    small {
        position: relative;
        display: inline-block;
        font-size: 18px;
        font-family: "Pretendard";
        font-weight: bold;
        margin-bottom: 18px;
        @media screen and (max-width: 768px) {
            font-size: 14px;
            margin-bottom: 14px;
        }
    }
    small::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 1px;
        background: ${color.white01};
    }
    h2 {
        font-size: 46px;
        font-family: "Ms-SB", "Pretendard";
        font-weight: bold;
        margin-bottom: 42px;
        @media screen and (max-width: 811px) {
            font-size: 42px;
        }
        @media screen and (max-width: 768px) {
            font-size: 32px;
            margin-bottom: 28px;
        }
    }
    p {
        display: block;
        max-width: 500px;
        font-size: 16px;
        font-family: "Pretendard";
        font-weight: 200;
        letter-spacing: -0.34px;
        line-height: 28px;
        margin-bottom: 68px;
        @media screen and (max-width: 768px) {
            font-size: 14px;
            margin-bottom: 42px;
            line-height: 24px;
        }
    }
    & > div {
        display: flex;
        align-items: center;
        gap: 18px;
        @media screen and (max-width: 768px) {
            gap: 16px;
        }
        span {
            font-size: 18px;
            font-family: "Ms-R", "Pretendard";
            font-weight: 200;
            @media screen and (max-width: 768px) {
                font-size: 16px;
            }
        }
        .line {
            width: 1px;
            height: 12px;
            background: ${color.white01};
        }
    }
`;
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 840px;
    padding: 68px 20px 146px;
    margin: 0 auto;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        padding: 42px 20px 73px;
    }
    h3 {
        font-size: 24px;
        font-family: "Pretendard";
        font-weight: bold;
        color: ${color.black04};
        margin-bottom: 32px;
        @media screen and (max-width: 768px) {
            font-size: 20px;
            margin-bottom: 26px;
        }
    }
    span {
        white-space: pre-line;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: -0.34px;
        color: ${color.gray13};
        @media screen and (max-width: 768px) {
            font-size: 14px;
            line-height: 24px;
            word-break: keep-all;
        }
    }

    & > div {
        display: flex;
        justify-content: center;
    }
`;
const ButtonStyled = styled.button`
    width: 100%;
    max-width: 172px;
    height: 48px;
    border-radius: 4px;
    border: 1px solid ${color.black04};
    font-size: 16px;
    letter-spacing: -0.37px;
    color: ${color.black04};
    font-family: "Pretendard";
    font-weight: 500;
    background: ${color.white01};
    margin-top: 120px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-top: 80px;
    }
`;
