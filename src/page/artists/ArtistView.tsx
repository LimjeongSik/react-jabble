import styled from "styled-components";
import { color } from "../../assets/colors";
import { useAppSelector } from "../../hook";
import { useArtist } from "../../hooks/useArtist";
import { RootState } from "../../store";

const ArtistView = () => {
    const filter = useAppSelector((state: RootState) => state.artists.value);
    const filterArtists = useArtist.filter((item) => item.class === filter);

    return (
        <Block>
            {filter === "all" || filter === ""
                ? useArtist.map((item) => (
                      <ViewBox key={item.id}>
                          <img src={item.img} alt={item.name} />
                          <h6>{item.name}</h6>
                          <span>{item.class}</span>
                          <p>지역 {item.area}</p>
                      </ViewBox>
                  ))
                : filterArtists.map((item) => (
                      <ViewBox key={item.id}>
                          <img src={item.img} alt={item.name} />
                          <h6>{item.name}</h6>
                          <span>{item.class}</span>
                          <p>지역 {item.area}</p>
                      </ViewBox>
                  ))}
        </Block>
    );
};

export default ArtistView;

const Block = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px 20px;
    margin-top: 20px;
    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const ViewBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 0;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    img {
        width: 100%;
        max-width: 80px;
        margin-bottom: 20px;
    }
    h6 {
        font-size: 16px;
        font-family: "Ms-M";
        margin-bottom: 7px;
    }
    span {
        font-size: 14px;
        font-family: "Ms-L";
        color: ${color.black01};
        margin-bottom: 15px;
    }
    p {
        font-size: 14px;
        font-family: "Ms-L";
        color: ${color.gray05};
    }
`;
