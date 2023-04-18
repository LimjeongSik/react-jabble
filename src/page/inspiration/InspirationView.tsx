import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hook";
import { useInspiration } from "../../hooks/useInspiration";
import { RootState } from "../../store";
import { onFilterTab } from "../../slices/inspiration";
import { useEffect } from "react";
import InspirationViewBox from "./InspirationViewBox";

const InspirationView = () => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(
        (state: RootState) => state.inspiration.value,
    );
    const filterInspiration = useInspiration.filter(
        (item) => item.genre === filter,
    );
    useEffect(() => {
        dispatch(onFilterTab(""));
    }, [dispatch]);
    return (
        <Block>
            {filter === "전체" || filter === ""
                ? useInspiration.map((item, idx) => (
                      <InspirationViewBox
                          item={item}
                          key={item.id}
                          genre={item.genre}
                      />
                  ))
                : filterInspiration.map((item) => (
                      <InspirationViewBox
                          item={item}
                          key={item.id}
                          genre={item.genre}
                      />
                  ))}
        </Block>
    );
};

export default InspirationView;

const Block = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 20px;
    margin: 71px 0 200px;
    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        margin-bottom: 100px;
    }
`;
