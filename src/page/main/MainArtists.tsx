import styled from "styled-components";
import { color } from "../../assets/colors";
import SwiperSlides from "../../components/SwiperSlides";
import { SwiperSlide } from "swiper/react";
import SwiperButton from "../../components/SwiperButton";
import { useArtist as data } from "../../hooks/useArtist";
import { useSwiper } from "../../hooks/useSwiper";
import MainTitle from "../../components/MainTitle";

const options = {
    slidesPerView: 1.5,
    initialSlide: 2,
    pagination: {
        clickable: true,
    },
    observer: true,
    observeParents: true,
    centeredSlides: true,
    breakpoints: {
        500: {
            slidesPerView: 1.8,
        },
        501: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        960: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 4.5,
        },
        1400: {
            slidesPerView: 5,
        },
    },
};

const MainArtists = () => {
    const [onInit, onPrevBtn, onNextBtn] = useSwiper();
    return (
        <Block>
            <BlockContent>
                <MainTitle
                    title="Artists"
                    subtitle="Discover Fablous Artists"
                />
                <SwiperBox>
                    <SwiperButton side="left" btn={onPrevBtn} />
                    <SwiperSlides options={options} onInit={onInit}>
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img src={item.img} alt={item.name} />
                                <h6>{item.name}</h6>
                                <span>{item.class}</span>
                            </SwiperSlide>
                        ))}
                    </SwiperSlides>
                    <SwiperButton side="right" btn={onNextBtn} />
                </SwiperBox>
            </BlockContent>
        </Block>
    );
};

export default MainArtists;

const Block = styled.div`
    width: 100%;
    padding: 74px 0 80px;
    background-color: ${color.white02};
    @media screen and (max-width: 768px) {
        padding: 37px 0 40px;
    }
`;
const BlockContent = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    text-align: center;
    h2 {
        margin-bottom: 14px;
    }
    @media screen and (max-width: 768px) {
        h2 {
            margin-bottom: 8px;
        }
    }
`;
const SwiperBox = styled.div`
    position: relative;
    width: 100%;
    margin-top: 50px;
    padding: 0 117px;
    box-sizing: border-box;
    h6 {
        font-size: 16px;
        color: ${color.black02};
        font-family: "Ms-SB";
        margin: 14px 0 4px;
        @media screen and (max-width: 499px) {
            font-size: 14px;
            margin: 10px 0 2px;
        }
    }
    span {
        font-size: 14px;
        color: ${color.gray07};
        font-family: "Ms-R";
        @media screen and (max-width: 499px) {
            font-size: 12px;
        }
    }
    .swiper-wrapper {
        align-items: center;
        margin-left: -46px;
        @media screen and (max-width: 767px) {
            margin-left: 0;
        }
    }
    .swiper-slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 310px;
        height: 400px;
        img {
            width: 100%;
        }
        transform: scale(0.7);
        transition: transform 0.3s;
        @media screen and (max-width: 767px) {
            height: auto;
        }
    }
    button {
        top: 45%;
        transform: translateY(-50%);
        min-width: 66px;
        height: 66px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        @media screen and (max-width: 767px) {
            display: none;
        }
    }
    .swiper-slide-active {
        transform: scale(1.3);
        margin: 0 46px;
        @media screen and (max-width: 767px) {
            transform: scale(1);
            margin: 0;
        }
    }
    @media screen and (max-width: 767px) {
        margin-top: 25px;
        padding: 0;
    }
`;
