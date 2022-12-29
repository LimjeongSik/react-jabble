import styled from "styled-components";
import { color } from "../../assets/colors";
import Marquee from "react-fast-marquee";
import { SwiperSlide } from "swiper/react";
import { useSwiper } from "../../hooks/useSwiper";
import SwiperSlides from "../../components/SwiperSlides";
import MainTitle from "../../components/MainTitle";

import { useCategory } from "../../hooks/useCategory";
import SwiperButton from "../../components/SwiperButton";

const options = {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
        clickable: true,
    },
    observer: true,
    observeParents: true,
    breakpoints: {
        500: {
            slidesPerView: 2.2,
        },
        768: {
            slidesPerView: 3.3,
        },
        1399: {
            slidesPerView: 6,
        },
    },
};

const MainCategory = () => {
    const [onInit, onPrevBtn, onNextBtn] = useSwiper();

    return (
        <Block>
            <CategoryBox>
                <MainTitle title="Category" />
                <CategorySwiperBox>
                    <SwiperButton side="left" btn={onPrevBtn} />
                    <SwiperSlides options={options} onInit={onInit}>
                        {useCategory.map((item) => (
                            <SwiperSlide key={item.id}>
                                <SlideBox img={item.img}>
                                    <h6>{item.title}</h6>
                                </SlideBox>
                            </SwiperSlide>
                        ))}
                    </SwiperSlides>
                    <SwiperButton side="right" btn={onNextBtn} />
                </CategorySwiperBox>
            </CategoryBox>
            <Marquee gradient={false}>
                <MarqueeText>Inspiration Inspiration Inspiration</MarqueeText>
            </Marquee>
        </Block>
    );
};

export default MainCategory;

const Block = styled.div`
    margin: 96px 0 56px;
    @media screen and (max-width: 768px) {
        margin: 48px 0 28px;
    }
`;
const CategoryBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 1400px;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
`;
const CategorySwiperBox = styled.div`
    position: relative;
    margin: 42px 0 90px;
    padding: 0 48px;
    button {
        top: 50%;
        transform: translateY(-50%);
        min-width: 66px;
        height: 66px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: transparent;
        z-index: 500;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
    @media screen and (max-width: 768px) {
        margin: 30px 0 45px;
        padding: 0;
    }
`;
const SlideBox = styled.div<{ img: string }>`
    position: relative;
    border-radius: 4px;
    background-image: url(${(img) => img.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 102px;
    text-align: center;
    h6 {
        position: relative;
        font-size: 18px;
        color: ${color.white02};
        font-family: "Ms-M";
    }
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }
`;
const MarqueeText = styled.div`
    font-size: 126px;
    letter-spacing: 0;
    color: rgba(0, 0, 0, 0.02);
    font-family: "Ms-SB";
    @media screen and (max-width: 768px) {
        font-size: 63px;
    }
    @media screen and (max-width: 499px) {
        font-size: 43px;
    }
`;
