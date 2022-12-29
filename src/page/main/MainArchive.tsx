import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../assets/colors";

import SwiperSlides from "../../components/SwiperSlides";
import { useSwiper } from "../../hooks/useSwiper";
import { useArchive } from "../../hooks/useArchive";
import { SwiperSlide } from "swiper/react";
import SwiperButton from "../../components/SwiperButton";

import Heart from "../../assets/images/icons/ic__heart.png";
import Eye from "../../assets/images/icons/ic__eye.png";
import MainTitle from "../../components/MainTitle";

const options = {
    slidesPerView: 1.05,
    spaceBetween: 7,
    pagination: {
        clickable: true,
    },
    observer: true,
    observeParents: true,
    breakpoints: {
        500: {
            slidesPerView: 1.2,
            spaceBetween: 7,
        },
        768: {
            slidesPerView: 1.4,
            spaceBetween: 28,
        },
    },
};

const MainArchive = () => {
    const [onInit, onPrevBtn, onNextBtn] = useSwiper();
    return (
        <Block>
            <BlockContent>
                <div className="swiper__l">
                    <MainTitle title="Archive" subtitle="Look Amazing Work" />
                    <SwiperButtonsBox>
                        <SwiperButton side="left" btn={onPrevBtn} />
                        <SwiperButton side="right" btn={onNextBtn} />
                    </SwiperButtonsBox>
                </div>
                <div className="swiper__box">
                    <div className="view__link">
                        <Link to="/archive">전체보기</Link>
                    </div>
                    <SwiperSlides options={options} onInit={onInit}>
                        {useArchive.map((item) => (
                            <SwiperSlide key={item.id}>
                                <SwiperSlideContent>
                                    <img src={item.img} alt={item.title} />
                                    <SwiperSlideTitle>
                                        <span>{item.class}</span>
                                        <h6>{item.title}</h6>
                                    </SwiperSlideTitle>
                                    <SwiperSlideFlexBox>
                                        <div>
                                            <img src={Heart} alt="좋아요" />
                                            <span>{item.want}</span>
                                        </div>
                                        <div>
                                            <img src={Eye} alt="조회수" />
                                            <span>{item.watch}</span>
                                        </div>
                                    </SwiperSlideFlexBox>
                                </SwiperSlideContent>
                            </SwiperSlide>
                        ))}
                    </SwiperSlides>
                </div>
            </BlockContent>
        </Block>
    );
};

export default MainArchive;

const Block = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px 140px;
    box-sizing: border-box;
    @media screen and (max-width: 499px) {
        padding-bottom: 70px;
    }
`;
const BlockContent = styled.div`
    display: flex;
    .swiper__l {
        width: 40%;
        h2 {
            margin-bottom: 14px;
        }
        @media screen and (max-width: 1024px) {
            width: 100%;
        }
        @media screen and (max-width: 768px) {
            text-align: center;
            h2 {
                margin-bottom: 8px;
            }
        }
    }
    .swiper__box {
        width: 60%;
        .view__link {
            text-align: right;
            margin-bottom: 21px;
            a {
                font-size: 16px;
                color: ${color.gray09};
                font-family: "Ms-R";
                text-decoration: underline;
                @media screen and (max-width: 768px) {
                    font-size: 14px;
                }
                @media screen and (max-width: 499px) {
                    font-size: 12px;
                }
            }
            @media screen and (max-width: 768px) {
                margin-bottom: 15px;
            }
        }
        @media screen and (max-width: 768px) {
            margin-top: 40px;
        }
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        .swiper__box {
            width: 100%;
        }
    }
`;
const SwiperSlideContent = styled.div`
    & > img {
        width: 100%;
        height: 316px;
        margin-bottom: 12px;
        @media screen and (max-width: 499px) {
            height: 226px;
            margin-bottom: 6px;
        }
    }
`;
const SwiperSlideTitle = styled.div`
    margin-bottom: 14px;
    span {
        font-size: 14px;
        color: ${color.gray10};
        font-family: "Ms-R";
    }
    h6 {
        font-size: 17px;
        color: ${color.black02};
        font-family: "Ms-M";
        margin-top: 4px;
    }
    @media screen and (max-width: 499px) {
        margin-bottom: 7px;
        span {
            font-size: 12px;
        }
        h6 {
            font-size: 14px;
            margin-top: 2px;
        }
    }
`;
const SwiperSlideFlexBox = styled.div`
    display: flex;
    align-items: center;
    gap: 21px;
    & > div {
        display: flex;
        align-items: center;
        img {
            width: 20px;
            height: 18px;
            margin-right: 6px;
            @media screen and (max-width: 499px) {
                width: 18px;
                height: 16px;
            }
        }
        span {
            font-size: 14px;
            color: ${color.black01};
            font-family: "Ms-R";
            @media screen and (max-width: 499px) {
                font-size: 12px;
            }
        }
    }
`;
const SwiperButtonsBox = styled.div`
    margin-top: 56px;
    button {
        position: initial;
        width: 66px;
        height: 66px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: transparent;
        @media screen and (max-width: 499px) {
            display: none;
        }
    }
    button:last-child {
        margin-left: 24px;
    }
    @media screen and (max-width: 1024px) {
        margin-top: 28px;
        button:last-child {
            margin-left: 12px;
        }
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
