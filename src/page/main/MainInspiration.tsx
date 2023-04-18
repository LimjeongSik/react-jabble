import styled from "styled-components";
import { useInspiration } from "../../hooks/useInspiration";
import MainTitle from "../../components/MainTitle";
import InspirationViewBox from "../inspiration/InspirationViewBox";

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
                        <InspirationViewBox
                            item={item}
                            key={item.id}
                            to={`/inspiration/${item.id}`}
                        />
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 20px;
    margin: 42px 0 121px;
    @media screen and (max-width: 768px) {
        margin-top: 21px;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 40px;
    }
`;
