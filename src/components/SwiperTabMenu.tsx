import { useState, useCallback } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { color } from "../assets/colors";
import { ArtistsTabMenu } from "../hooks/useArtist";
import SwiperSlides from "./SwiperSlides";
import { useAppDispatch } from "../hook";
import { onFilterTab } from "../slices/artist";

const options = {
    slidesPerView: "auto",
    pagination: {
        clickable: true,
    },
    observer: true,
    observeParents: true,
};

const SwiperTabMenu = () => {
    const [active, setActive] = useState<number>(1);
    const onClickActive = useCallback(
        (e: React.MouseEvent<HTMLElement, MouseEvent>, id: number) => {
            setActive(id);
        },
        [],
    );
    const dispatch = useAppDispatch();
    return (
        <Block>
            <SwiperSlides options={options}>
                {ArtistsTabMenu.map((item, idx) => (
                    <SwiperSlide
                        key={item.id}
                        onClick={(e) => {
                            onClickActive(e, item.id);
                            dispatch(onFilterTab(item.name));
                        }}
                        className={active === idx + 1 ? "active" : ""}
                    >
                        <span>{item.title}</span>
                    </SwiperSlide>
                ))}
            </SwiperSlides>
        </Block>
    );
};

export default SwiperTabMenu;

const Block = styled.div`
    margin: 35px 0;
    .swiper-slide {
        width: fit-content;
        padding: 8px 25px;
        border-radius: 39.5px;
        border: 1px solid ${color.gray04};
        cursor: pointer;
        span {
            font-size: 14px;
            color: ${color.black01};
            font-family: "Ms-R";
        }
    }
    .swiper-slide:not(:last-child) {
        margin-right: 15px;
    }
    .swiper-slide.active {
        background-color: ${color.black04};
        border-color: ${color.black04};
        span {
            color: ${color.white02};
        }
    }
    @media screen and (max-width: 768px) {
        margin: 20px 0 50px;
    }
`;
