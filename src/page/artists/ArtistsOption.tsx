import styled from "styled-components";
import { color } from "../../assets/colors";
import SelectBox from "../../components/SelectBox";

const regionOption = {
    initialValue: "전체 지역",
    optionValue: ["서울", "경기", "인천", "광주", "부산"],
};

const sortOption = {
    initialValue: "정렬",
    optionValue: ["인기순", "날짜순", "오름차순", "내림차순"],
};

const ArtistsOption = () => {
    return (
        <Block>
            <CountBox>
                전체<span>35</span>명
            </CountBox>
            <SelectBoxStyled>
                <SelectBox option={regionOption} />
                <SelectBox option={sortOption} />
            </SelectBoxStyled>
        </Block>
    );
};

export default ArtistsOption;

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const CountBox = styled.div`
    flex: 1;
    font-size: 15px;
    font-family: "Ms-R";
    color: ${color.black01};
`;
const SelectBoxStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    gap: 5px;
    grid-gap: 5px;
`;
