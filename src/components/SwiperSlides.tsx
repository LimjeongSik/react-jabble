import { Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.min.css";

interface Props {
    children: React.ReactNode;
    options: {};
    onInit?: (swiper: SwiperCore) => void;
}

const SwiperSlides = ({ children, options, onInit }: Props) => {
    SwiperCore.use([Navigation]);

    return (
        <>
            <Swiper {...options} onInit={onInit}>
                {children}
            </Swiper>
        </>
    );
};

export default SwiperSlides;
