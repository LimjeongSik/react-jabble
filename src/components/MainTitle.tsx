import styled, { css } from "styled-components";
import { color } from "../assets/colors";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    subtitle?: string;
    link?: string;
    linktext?: string;
}

const MainTitle = ({ title, subtitle, link, linktext }: Props) => {
    return (
        <>
            <Block>
                <h2>{title}</h2>
            </Block>
            <SubTitle subtitle={subtitle} linktext={linktext}>
                <span>{subtitle}</span>
                <Link to={`/${link}`}>{linktext}</Link>
            </SubTitle>
        </>
    );
};

export default MainTitle;

const Block = styled.div`
    h2 {
        font-size: 40px;
        color: ${color.black03};
        font-family: "Ms-SB";
        @media screen and (max-width: 768px) {
            font-size: 30px;
        }
        @media screen and (max-width: 499px) {
            font-size: 25px;
        }
    }
`;
const SubTitle = styled.div<{
    subtitle: string | undefined;
    linktext: string | undefined;
}>`
    ${(props) =>
        props.subtitle &&
        props.linktext &&
        css`
            margin-top: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media screen and (max-width: 768px) {
                margin-top: 8px;
            }
        `}
    ${(props) =>
        props.subtitle &&
        css`
            span {
                font-size: 18px;
                color: ${color.gray08};
                font-family: "Ms-R";
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                @media screen and (max-width: 768px) {
                    font-size: 16px;
                }
                @media screen and (max-width: 499px) {
                    font-size: 14px;
                }
            }
        `}
    ${(props) =>
        props.linktext &&
        css`
            a {
                font-size: 16px;
                color: ${color.gray08};
                font-family: "Ms-R";
                text-decoration: underline;
                white-space: nowrap;
                @media screen and (max-width: 768px) {
                    font-size: 14px;
                }
                @media screen and (max-width: 499px) {
                    font-size: 12px;
                }
            }
        `}
`;
