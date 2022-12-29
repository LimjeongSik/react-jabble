import styled from "styled-components";
import { color } from "../assets/colors";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Block>
            <BlockContent>
                <FooterLBox>
                    <div className="footer__link">
                        <Link to="/">이용약관</Link>
                        <div className="line"></div>
                        <Link to="/">개인정보처리방침</Link>
                        <div className="line"></div>
                        <Link to="/">Q&A</Link>
                        <div className="line"></div>
                        <Link to="/">공지사항</Link>
                        <div className="line"></div>
                        <Link to="/">저작권진흥법</Link>
                    </div>
                    <div className="footer__info">
                        <div>
                            <span>상호명 : Jabble</span>
                            <span>
                                사업장소재시 : 서울특별시 동대문구 경희대로 26,
                                삼의원 창업센터 313호
                            </span>
                            <span>사업자등록번호 : 893-91-01689</span>
                        </div>
                        <div>
                            <span>고객센터 : 02-965-0815</span>
                            <span>이메일 : help@jabble.me</span>
                        </div>
                    </div>
                    <div className="footer__link">
                        <Link to="/">Who we are</Link>
                        <div className="line"></div>
                        <Link to="/">Jabble Service</Link>
                        <div className="line"></div>
                        <Link to="/">We are Hiring</Link>
                        <div className="line"></div>
                        <Link to="/">제휴 및 업무협약 문의</Link>
                    </div>
                </FooterLBox>
                <FooterRBox>
                    <strong>카카오톡 문의</strong>
                    <span>
                        10:00 ~ 19:00 (점심시간 13:00 ~ 14:00)
                        <br />
                        주말,공휴일 제외
                    </span>
                    <button>문의하기</button>
                </FooterRBox>
            </BlockContent>
        </Block>
    );
};

export default Footer;

const Block = styled.div`
    width: 100%;
    padding: 72px 0;
    background-color: ${color.black03};
    @media screen and (max-width: 1399px) {
        padding: 36px 0;
    }
`;
const BlockContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
`;
const FooterLBox = styled.div`
    .footer__link {
        display: flex;
        align-items: center;
        gap: 4px 15px;
        flex-wrap: wrap;
        a {
            font-size: 15px;
            letter-spacing: -0.28px;
            color: ${color.gray11};
            font-family: "Ms-M";
            @media screen and (max-width: 499px) {
                font-size: 13px;
            }
        }
        .line {
            width: 1px;
            height: 12px;
            background-color: rgb(148 148 148 / 59%);
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
    }
    .footer__info {
        margin: 16px 0 40px;
        & > div {
            display: flex;
            align-items: center;
            gap: 0px 15px;
            flex-wrap: wrap;
            span {
                font-size: 12px;
                letter-spacing: -0.23px;
                color: ${color.gray11};
                font-family: "Ms-L";
                line-height: 22px;
                @media screen and (max-width: 499px) {
                    font-size: 11px;
                }
            }
        }
    }
`;
const FooterRBox = styled.div`
    display: flex;
    flex-direction: column;
    strong {
        font-size: 15px;
        letter-spacing: -0.28px;
        color: ${color.white01};
        font-family: "Ms-SB";
        margin-bottom: 6px;
        @media screen and (max-width: 499px) {
            font-size: 13px;
        }
    }
    span {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.26px;
        color: ${color.gray12};
        font-family: "Ms-L";
        margin-bottom: 22px;
        @media screen and (max-width: 499px) {
            font-size: 12px;
        }
    }
    button {
        width: 316px;
        height: 44px;
        border-radius: 4px;
        background-color: ${color.black04};
        font-size: 15px;
        letter-spacing: -0.28px;
        color: ${color.white01};
        font-family: "Ms-SB";
        @media screen and (max-width: 499px) {
            font-size: 13px;
        }
    }
`;
