import styled from "styled-components";
import { color } from "../../assets/colors";
import { useArchive } from "../../hooks/useArchive";
import Heart from "../../assets/images/icons/ic__heart.png";
import Eye from "../../assets/images/icons/ic__eye.png";

const ArchiveView = () => {
    return (
        <Block>
            {useArchive.map((item) => (
                <ArchvieStyled key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <span>{item.class}</span>
                    <h6>{item.title}</h6>
                    <ArchiveOptionStyled>
                        <div>
                            <img src={Heart} alt="좋아요" />
                            <span>{item.want}</span>
                        </div>
                        <div>
                            <img src={Eye} alt="조회수" />
                            <span>{item.watch}</span>
                        </div>
                    </ArchiveOptionStyled>
                </ArchvieStyled>
            ))}
        </Block>
    );
};

export default ArchiveView;

const Block = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 20px;
    margin-top: 20px;
    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 499px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const ArchvieStyled = styled.div`
    & > img {
        width: 100%;
        height: 100%;
        max-height: 257px;
        margin-bottom: 10px;
        cursor: pointer;
        @media screen and (max-width: 499px) {
            height: auto;
            max-height: auto;
        }
    }
    span {
        font-size: 14px;
        color: ${color.gray10};
        font-family: "Ms-R";
    }
    h6 {
        font-size: 17px;
        color: ${color.black02};
        font-family: "Ms-M";
        margin-top: 4px;
    }
`;
const ArchiveOptionStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 21px;
    margin-top: 10px;
    & > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
            width: 20px;
            height: 18px;
            margin-right: 6px;
            @media screen and (max-width: 499px) {
                width: 18px;
                height: 16px;
            }
        }
        span {
            font-size: 14px;
            color: ${color.black01};
            font-family: "Ms-R";
            @media screen and (max-width: 499px) {
                font-size: 12px;
            }
        }
    }
`;
