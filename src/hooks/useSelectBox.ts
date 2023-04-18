import { useState, useCallback } from "react";

type useSelectBoxType = [
    boolean,
    string | null,
    () => void,
    (e: React.MouseEvent<HTMLButtonElement>) => void,
    React.Dispatch<React.SetStateAction<boolean>>,
];

export const useSelectBox = (initialValue: string): useSelectBoxType => {
    const [isDrop, setIsDrop] = useState<boolean>(false);
    const [optionTitle, setOptionTitle] = useState<string | null>(initialValue);

    const onIsDropDown = useCallback(() => {
        setIsDrop(!isDrop);
    }, [isDrop]);

    const onOptionValue = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            setOptionTitle(e.currentTarget.textContent);
        },
        [],
    );

    return [isDrop, optionTitle, onIsDropDown, onOptionValue, setIsDrop];
};
