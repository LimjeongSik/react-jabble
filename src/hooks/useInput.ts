import { useState, useCallback } from "react";

type InputTypes = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

export const useInput = (inputValue: string): InputTypes => {
    const [input, setInput] = useState(inputValue);

    const onChangeInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
        },
        [],
    );

    return [input, onChangeInput];
};
