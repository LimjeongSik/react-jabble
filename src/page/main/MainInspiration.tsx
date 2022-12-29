import styled from "styled-components";
import { color } from "../../assets/colors";
import { useInspiration } from "../../hooks/useInspiration";
import MainTitle from "../../components/MainTitle";

const MainInspiration = () => {
    return (
        <Block>
            <div>
                <MainTitle
                    title="Inspiration"
                    subtitle="Feed your inspiration with our regular columns."
                    link="inspiration"
                    linktext="전체보기"
                />
                <ContentsBox>
                    {useInspiration.map((item) => (
                        <ContentBox key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <h6>{item.title}</h6>
                            <span className="ellipsis">{item.description}</span>
                        </ContentBox>
                    ))}
                </ContentsBox>
            </div>
        </Block>
    );
};

export default MainInspiration;

const Block = styled.div`
    width: 100%;
    max-width: 1400px;
    padding: 0 20px;
    margin: 88px auto 120px;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        margin: 44px auto 60px;
    }
`;
const ContentsBox = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 28px;
    margin-top: 42px;
    @media screen and (max-width: 768px) {
        margin-top: 30px;
        flex-direction: column;
    }
`;
const ContentBox = styled.div`
    flex: 1;
    img {
        width: 100%;
        margin-bottom: 18px;
    }
    h6 {
        font-size: 18px;
        color: ${color.black02};
        font-family: "Ms-M";
        margin-bottom: 9px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    span {
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.34px;
        color: ${color.gray05};
        font-family: "Ms-L";
    }
    @media screen and (max-width: 499px) {
        h6 {
            font-size: 16px;
        }
        span {
            font-size: 13px;
            line-height: 18px;
        }
    }
`;
