import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hook";
import { useArtist } from "../../hooks/useArtist";
import { RootState } from "../../store";
import { onInitFilterTab } from "../../slices/artist";
import { useEffect } from "react";

import ArtistsViewBox from "./ArtistsViewBox";

const ArtistView = () => {
    const filter = useAppSelector((state: RootState) => state.artists.value);
    const filterArtists = useArtist.filter((item) => item.clasis === filter);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(onInitFilterTab(""));
    }, [dispatch]);
    return (
        <Block>
            {filter === "all" || filter === ""
                ? useArtist.map((item) => (
                      <ArtistsViewBox item={item} key={item.id} />
                  ))
                : filterArtists.map((item) => (
                      <ArtistsViewBox item={item} key={item.id} />
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
    margin: 20px 0 200px;
    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        margin-bottom: 100px;
    }
`;
