import styled from "styled-components";
import { color } from "../assets/colors";
import { useSelectBox } from "../hooks/useSelectBox";
import { useEffect, useCallback, useRef } from "react";

interface Props {
    option: {
        initialValue: string;
        optionValue: string[];
    };
}

const SelectBox = ({ option }: Props) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const { initialValue, optionValue } = option;
    const [isDrop, optionTitle, onIsDropDown, onOptionValue, setIsDrop] =
        useSelectBox(initialValue);

    const offDropDown = useCallback(
        (e: MouseEvent): void => {
            if (
                e.target instanceof HTMLElement &&
                !wrapRef.current?.contains(e.target)
            ) {
                setIsDrop(false);
            }
        },
        [setIsDrop],
    );

    useEffect(() => {
        document.addEventListener("mousedown", offDropDown);
        return () => document.removeEventListener("mousedown", offDropDown);
    }, [offDropDown]);

    return (
        <>
            <SelectBoxStyled onClick={onIsDropDown} ref={wrapRef}>
                <SelectOptionTitle>{optionTitle}</SelectOptionTitle>
                {isDrop && (
                    <SelectContent>
                        {optionValue.map((item, idx) => (
                            <SelectOptionButton
                                key={idx}
                                onClick={onOptionValue}
                            >
                                {item}
                            </SelectOptionButton>
                        ))}
                    </SelectContent>
                )}
            </SelectBoxStyled>
        </>
    );
};

export default SelectBox;

const SelectBoxStyled = styled.div`
    position: relative;
    width: 100%;
    max-width: 178px;
    min-width: 108px;
    padding: 10px 15px;
    border: 1px solid ${color.gray02};
    font-size: 13px;
    color: ${color.black01};
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
`;
const SelectOptionTitle = styled.div``;
const SelectContent = styled.div`
    position: absolute;
    left: -1px;
    top: 38px;
    width: calc(100% + 2px);
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 1px solid ${color.gray02};
    border-radius: 0px 0px 3px 3px;
    background: ${color.white01};
    box-sizing: border-box;
    z-index: 500;
`;
const SelectOptionButton = styled.button`
    cursor: pointer;
    background: ${color.white01};
    text-align: left;
    padding: 10px;
    font-size: 13px;
    &:hover {
        background: rgba(0, 0, 0, 0.03);
    }
`;
