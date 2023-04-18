import SwiperTabMenu from "../../components/SwiperTabMenu";
import { useAppDispatch, useAppSelector } from "../../hook";
import { RootState } from "../../store";
import { InspirationTabMenu } from "../../hooks/useInspiration";
import { onActiveTab, onFilterTab } from "../../slices/inspiration";
import { useCallback, useEffect } from "react";
import InspirationView from "./InspirationView";
const options = {
    slidesPerView: "auto",
    pagination: {
        clickable: true,
    },
    observer: true,
    observeParents: true,
};

const InspirationTemplate = () => {
    const dispatch = useAppDispatch();
    const isActiveNumber = useAppSelector(
        (state: RootState) => state.inspiration.isActive,
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
                options={options}
                isActiveNumber={isActiveNumber}
                data={InspirationTabMenu}
                dispatchFunction={dispatchFunction}
            />
            <InspirationView />
        </>
    );
};

export default InspirationTemplate;
