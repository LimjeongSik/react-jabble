import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MypageContent = () => {
    return (
        <Block>
            <ContentStyled>
                <ContentLink to="/mypage/mypage1">마이페이지 1</ContentLink>
            </ContentStyled>
            <ContentStyled>
                <ContentLink to="/mypage/mypage2">마이페이지 2</ContentLink>
            </ContentStyled>
            <ContentStyled>
                <ContentLink to="/mypage/mypage3">마이페이지 3</ContentLink>
            </ContentStyled>
            <ContentStyled>
                <ContentLink to="/mypage/mypage4">마이페이지 4</ContentLink>
            </ContentStyled>
            <ContentStyled>
                <ContentLink to="/mypage/mypage5">마이페이지 5</ContentLink>
            </ContentStyled>
        </Block>
    );
};

export default MypageContent;

const Block = styled.ul`
    flex: 1;
    @media screen and (max-width: 960px) {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px 20px;
        margin: 15px 0 40px;
    }
`;
const ContentStyled = styled.li`
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    @media screen and (max-width: 960px) {
        &:not(:last-child) {
            margin-bottom: 0;
        }
    }
`;
const ContentLink = styled(NavLink)``;
