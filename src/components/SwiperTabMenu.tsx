import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { color } from "../assets/colors";
import SwiperSlides from "./SwiperSlides";

interface Props {
    options: {};
    data: {
        id: number;
        name: string;
        title: string;
    }[];
    isActiveNumber: number;
    dispatchFunction: (id: number, name: string) => void;
}

const SwiperTabMenu = ({
    options,
    data,
    isActiveNumber,
    dispatchFunction,
}: Props) => {
    return (
        <Block>
            <SwiperSlides options={options}>
                {data.map((item, idx) => (
                    <SwiperSlide
                        key={item.id}
                        onClick={(e) => {
                            dispatchFunction(item.id, item.name);
                        }}
                        className={isActiveNumber === idx + 1 ? "active" : ""}
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
            font-family: "Pretendard";
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
