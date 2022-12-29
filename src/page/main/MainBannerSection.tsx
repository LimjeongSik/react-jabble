import styled from "styled-components";
import MainBanner from "../../assets/images/banners/banner__main.png";
import { color } from "../../assets/colors";
import IsearchB from "../../assets/images/icons/ic__search_b.png";
const MainBannerSection = () => {
    return (
        <Block>
            <BlockContent>
                <h2>jabble.</h2>
                <p>What are you doing?</p>
                <InputBox>
                    <div className="input__box">
                        <input type="text" placeholder="Search" />
                    </div>
                    <span>
                        Trending : model, makeup artist, hair artist, sylist
                    </span>
                </InputBox>
            </BlockContent>
        </Block>
    );
};

export default MainBannerSection;

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 570px;
    background-image: url(${MainBanner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        height: 450px;
    }
    @media screen and (max-width: 499px) {
        height: 400px;
    }
`;
const BlockContent = styled.div`
    width: 100%;
    text-align: center;
    h2 {
        font-size: 76px;
        color: ${color.black03};
        font-family: "Ms-SB";
    }
    p {
        font-size: 36px;
        color: ${color.black03};
        font-family: "Ms-R";
    }
    @media screen and (max-width: 768px) {
        h2 {
            font-size: 60px;
        }
        p {
            font-size: 28px;
        }
    }
    @media screen and (max-width: 499px) {
        h2 {
            font-size: 45px;
        }
        p {
            font-size: 18px;
        }
    }
`;
const InputBox = styled.div`
    width: 100%;
    max-width: 984px;
    margin: 62px auto 0;
    padding: 0 20px;
    text-align: left;
    box-sizing: border-box;
    .input__box {
        position: relative;
        margin-bottom: 20px;
        input {
            width: 100%;
            height: 66px;
            padding: 22px 22px 22px 119px;
            box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
            background-image: url(${IsearchB});
            background-repeat: no-repeat;
            background-size: 24px 24px;
            background-position: 32px 50%;
            border-radius: 6px;
            box-sizing: border-box;
            font-size: 18px;
            @media screen and (max-width: 768px) {
                height: 50px;
                background-size: 18px 18px;
                padding-left: 70px;
                background-position: 16px 50%;
            }
            @media screen and (max-width: 499px) {
                font-size: 14px;
            }
        }
        input::placeholder {
            font-family: "Ms-R";
            color: ${color.gray07};
        }
    }
    .input__box::before {
        content: "";
        position: absolute;
        left: 87px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 28px;
        background-color: ${color.gray03};
        @media screen and (max-width: 768px) {
            left: 50px;
        }
    }
    span {
        font-size: 14px;
        color: ${color.gray06};
        font-family: "Ms-R";
        @media screen and (max-width: 499px) {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 768px) {
        margin: 40px auto 0;
    }
    @media screen and (max-width: 499px) {
        margin: 20px auto 0;
    }
`;
