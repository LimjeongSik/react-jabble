import { useMenuList } from "../hooks/useMenuList";
import styled from "styled-components";
import MenuList from "./MenuList";

export interface ButtonDisabledProps {
    ButtonDisabled?: React.MouseEventHandler<HTMLAnchorElement>;
    tog?: string;
    drop?: boolean;
}

const HeaderMenuList = ({ ButtonDisabled, tog, drop }: ButtonDisabledProps) => {
    return (
        <UlStyled>
            {useMenuList.map((item) => (
                <MenuList
                    key={item.id}
                    item={item}
                    ButtonDisabled={ButtonDisabled}
                    tog={tog}
                    drop={drop}
                />
            ))}
        </UlStyled>
    );
};

export default HeaderMenuList;

const UlStyled = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 975px) {
        display: none;
    }
`;
