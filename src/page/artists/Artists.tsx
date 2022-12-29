import styled from "styled-components";
import { color } from "../../assets/colors";
import MainTitle from "../../components/MainTitle";
import SwiperTabMenu from "../../components/SwiperTabMenu";
import ArtistsOption from "./ArtistsOption";
import ArtistView from "./ArtistView";

const Artists = () => {
    return (
        <Block>
            <div className="border__line">
                <MainTitle
                    title="Artists"
                    subtitle="다채로운 컬러와 편안하고 따뜻한 실용적인 웨어를 선보입니다."
                />
            </div>
            <SwiperTabMenu />
            <ArtistsOption />
            <ArtistView />
        </Block>
    );
};

export default Artists;

const Block = styled.div`
    width: 100%;
    max-width: 1400px;
    min-height: 100%;
    margin: 70px auto;
    padding: 0 20px;
    box-sizing: border-box;
    & > .border__line {
        border-bottom: 1px solid ${color.gray03};
        padding-bottom: 45px;
        h2 {
            margin-bottom: 24px;
            font-family: "Ms-R";
        }
        span {
            color: ${color.black04};
        }
        @media screen and (max-width: 768px) {
            padding-bottom: 25px;
            h2 {
                margin-bottom: 12px;
            }
        }
    }
    @media screen and (max-width: 960px) {
        margin: 20px auto;
    }
`;
