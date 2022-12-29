import { RefObject, useRef } from "react";

type useType = [RefObject<HTMLDivElement>, () => void];

export const useScrollView = (): useType => {
    const element = useRef<HTMLDivElement>(null);
    const onMoveToElement = () => {
        element.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    };
    return [element, onMoveToElement];
};
