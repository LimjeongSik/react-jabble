import styled from "styled-components";
import MainBannerSection from "./MainBannerSection";
import MainInspiration from "./MainInspiration";
import MainArtists from "./MainArtists";
import MainCategory from "./MainCategory";
import MainArchive from "./MainArchive";

const Main = () => {
    return (
        <Block>
            <MainBannerSection />
            <MainInspiration />
            <MainArtists />
            <MainCategory />
            <MainArchive />
        </Block>
    );
};

export default Main;

const Block = styled.div``;
