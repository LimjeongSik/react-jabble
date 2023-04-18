import SwiperTabMenu from "../../components/SwiperTabMenu";
import ArtistsOption from "./ArtistsOption";
import ArtistView from "./ArtistView";
import { ArtistsTabMenu } from "../../hooks/useArtist";
import { useAppSelector, useAppDispatch } from "../../hook";
import { RootState } from "../../store";
import { useCallback, useEffect } from "react";
import { onActiveTab, onFilterTab } from "../../slices/artist";

const options = {
    slidesPerView: "auto",
    pagination: {
        clickable: true,
    },
    observer: true,
    observeParents: true,
};

const ArtistsTemplate = () => {
    const dispatch = useAppDispatch();
    const isActiveNumber = useAppSelector(
        (state: RootState) => state.artists.isActive,
    );
    const dispatchFunction = useCallback(
        (id: number, name: string) => {
            dispatch(onActiveTab(id));
            dispatch(onFilterTab(name));
        },
        [dispatch],
    );

    useEffect(() => {
        dispatch(onActiveTab(1));
    }, [dispatch]);
    return (
        <>
            <SwiperTabMenu
                data={ArtistsTabMenu}
                options={options}
                isActiveNumber={isActiveNumber}
                dispatchFunction={dispatchFunction}
            />
            <ArtistsOption />
            <ArtistView />
        </>
    );
};

export default ArtistsTemplate;
