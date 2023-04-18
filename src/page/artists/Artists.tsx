import styled from "styled-components";
import BasicLayout from "../../components/layout/BasicLayout";
import ArtistsTemplate from "./ArtistsTemplate";

import ArtistsBanner from "../../assets/images/banners/banner__artists.png";
import { color } from "../../assets/colors";

const Artists = () => {
    return (
        <>
            <ArtistsBannerStyled>
                <ArtistsBannerContent>
                    <h2>예술과 소통하는 패션 브랜드</h2>
                    <span>
                        다채로운 컬러와 퀄리티 높은 자수 포인트로 엑스씨엑스만의
                        감각적인 그래픽
                    </span>
                </ArtistsBannerContent>
            </ArtistsBannerStyled>
            <BasicLayout
                title="Artists"
                subTitle="다채로운 컬러와 편안하고 따뜻한 실용적인 웨어를 선보입니다."
                children={<ArtistsTemplate />}
            />
        </>
    );
};

export default Artists;

const ArtistsBannerStyled = styled.div`
    position: relative;
    width: 100%;
    height: 220px;
    background-image: url(${ArtistsBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
const ArtistsBannerContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        font-size: 28px;
        color: ${color.white01};
        font-family: "Pretendard";
        font-weight: bold;
        margin-bottom: 18px;
    }
    span {
        font-size: 14px;
        letter-spacing: -0.04px;
        color: ${color.white01};
        font-family: "Pretendard";
        font-weight: 200;
    }
`;
