import styled, { css } from "styled-components";
import { color } from "../../assets/colors";

import HeartOff from "../../assets/images/btns/btn__heart__off.png";
import HeartOn from "../../assets/images/btns/btn__heart__on.png";
import { useState, useCallback } from "react";

interface Props {
    item: {
        name: string;
        clasis: string;
        img: string;
        area: string;
        portfolio: string;
    };
}

const ArtistsViewBox = ({ item }: Props) => {
    const { name, img, area, portfolio, clasis } = item;
    const [isActive, setIsActive] = useState<boolean>(false);

    const onIsActive = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setIsActive(!isActive);
        },
        [isActive],
    );
    return (
        <ArtistsViewBoxStyled>
            <PortFolioStyled portfolio={portfolio} className="is__hover" />
            <ProfileBox>
                <div className="artists__profile">
                    <img src={img} alt={name} />
                    <h6>{name}</h6>
                    <span>{clasis}</span>
                    <p>지역 {area}</p>
                    <HeartButtonStyled
                        onClick={(e) => onIsActive(e)}
                        isActive={isActive}
                    >
                        <div></div>
                        <span>좋아요</span>
                    </HeartButtonStyled>
                </div>
            </ProfileBox>
        </ArtistsViewBoxStyled>
    );
};

export default ArtistsViewBox;

const ArtistsViewBoxStyled = styled.div`
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    cursor: pointer;
    &:hover .is__hover::before {
        transform: scale(1.1);
    }
`;
const PortFolioStyled = styled.div<{ portfolio: string }>`
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 0;
    padding-bottom: calc(186 / 327 * 100%);
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease-out;
        ${(props) =>
            props.portfolio
                ? css`
                      background: url(${props.portfolio}) no-repeat center /
                          cover;
                  `
                : css`
                      background: #ededed;
                  `}
    }
`;
const ProfileBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 198px;
    border-left: 1px solid ${color.white03};
    border-right: 1px solid ${color.white03};
    border-bottom: 1px solid ${color.white03};
    box-sizing: border-box;
    border-radius: 0 0 4px 4px;
    .artists__profile {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: -36px 0 0 32px;
        & > img {
            width: 100%;
            max-width: 72px;
            margin-bottom: 23px;
        }
        & > h6 {
            font-size: 18px;
            font-family: "Ms-M";
            line-height: 1;
            margin-bottom: 4px;
            color: ${color.black03};
        }
        & > span {
            font-size: 14px;
            font-family: "Ms-R";
            color: ${color.black01};
            line-height: 1;
            margin-bottom: 10px;
        }
        & > p {
            font-size: 13px;
            font-family: "Pretendard";
            font-weight: 200;
            color: ${color.gray05};
            margin-bottom: 18px;
        }
    }
`;
const HeartButtonStyled = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 88px;
    height: 34px;
    border-radius: 17px;
    border: 1px solid ${color.white03};
    cursor: pointer;
    box-sizing: border-box;
    div {
        width: 20px;
        height: 18px;
        margin-right: 8px;
        -webkit-tap-highlight-color: transparent;
        ${(props) =>
            props.isActive
                ? css`
                      background: url(${HeartOn}) no-repeat center / cover;
                  `
                : css`
                      background: url(${HeartOff}) no-repeat center / cover;
                  `}
    }
    span {
        font-size: 13px;
        letter-spacing: -0.02px;
        color: ${color.black01};
        font-family: "Pretendard";
        font-weight: 200;
    }
`;
