import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { color } from "../../assets/colors";

interface Props {
    item: {
        id: number;
        title: string;
        description: string;
        img: string;
    };
    genre?: string;
    to?: string;
}

const InspirationViewBox = ({ item, genre, to }: Props) => {
    const { id, title, description, img } = item;

    return (
        <LinkStyled to={to ? `${to}` : `${id}`} key={id}>
            <InspirationViewBoxStyled genre={genre}>
                <InspirationImageBox
                    img={img}
                    className="inspiration__thumbnail"
                />
                <div className="inspiration__information">
                    <small>{genre}</small>
                    <h6>{title}</h6>
                    <span>{description}</span>
                </div>
            </InspirationViewBoxStyled>
        </LinkStyled>
    );
};

export default InspirationViewBox;

const LinkStyled = styled(Link)`
    &:hover .inspiration__thumbnail::before {
        transform: scale(1.05);
    }
`;

const InspirationViewBoxStyled = styled.div<{ genre: string | undefined }>`
    cursor: pointer;
    & > .inspiration__information {
        margin-top: 20px;
        small {
            position: relative;
            display: inline-block;
            font-size: 15px;
            letter-spacing: -0.04px;
            color: ${color.black05};
            font-weight: bold;
            margin-bottom: 18px;

            ${(props) =>
                props.genre ||
                css`
                    display: none;
                `}
        }
        small::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: ${color.black05};
            font-family: "Pretendard";
        }
        h6 {
            font-size: 21px;
            color: ${color.black04};
            font-family: "Ms-M";
            font-weight: bold;
            margin-bottom: 12px;
            font-family: "Pretendard";
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        span {
            font-size: 15px;
            line-height: 26px;
            letter-spacing: -0.32px;
            color: ${color.gray13};
            font-family: "Pretendard";
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        @media screen and (max-width: 960px) {
            small {
                font-size: 13px;
                margin-bottom: 13px;
            }
            h6 {
                font-size: 17px;
                margin-bottom: 8px;
            }
            span {
                font-size: 13px;
                line-height: 21px;
            }
        }
    }
`;
const InspirationImageBox = styled.div<{ img: string }>`
    position: relative;
    max-width: 100%;
    height: 0;
    padding-bottom: calc(260 / 448 * 100%);
    overflow: hidden;
    border-radius: 6px;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        ${(props) =>
            props.img &&
            css`
                background: url(${props.img}) no-repeat center / cover;
                transition: transform 0.3s ease-out;
            `}
    }

    &:hover::before {
        transform: scale(1.1);
    }
`;
