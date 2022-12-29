import styled from "styled-components";
import { color } from "../../assets/colors";

const ArtistsOption = () => {
    return (
        <Block>
            <CountBox>
                전체<span>35</span>명
            </CountBox>
            <SelectBox>
                <select>
                    <option value="">전체 지역</option>
                </select>
                <select>
                    <option value="">정렬</option>
                </select>
            </SelectBox>
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
const SelectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    select {
        outline: none;
        width: 100%;
        max-width: 180px;
        padding: 10px 15px;
        border: 1px solid ${color.gray02};
        font-size: 13px;
        color: ${color.black01};
        @media screen and (max-width: 500px) {
            max-width: max-content;
        }
    }
    & > select:first-child {
        margin-right: 10px;
    }
`;
