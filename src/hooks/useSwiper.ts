import { useRef, useCallback } from "react";
import SwiperCore from "swiper";

type Test = [(Swiper: SwiperCore) => void, () => void, () => void];

export const useSwiper = (): Test => {
    const swiperRef = useRef<SwiperCore>();

    const onInit = (Swiper: SwiperCore) => {
        swiperRef.current = Swiper;
    };

    const onPrevBtn = useCallback(() => {
        swiperRef.current?.slidePrev();
    }, []);

    const onNextBtn = useCallback(() => {
        swiperRef.current?.slideNext();
    }, []);

    return [onInit, onPrevBtn, onNextBtn];
};
