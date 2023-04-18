import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { color } from "../assets/colors";
import { type ButtonDisabledProps } from "./HeaderMenuList";
import { useState, useCallback } from "react";

interface Props extends ButtonDisabledProps {
    item: {
        id: number;
        to: string;
        link: string;
        submenu?: {
            title: string;
            to: string;
        }[];
        tog?: string | undefined;
        drop?: boolean;
    };
}

const MenuList = ({ ButtonDisabled, item, tog, drop }: Props) => {
    const [subMenuActive, setSubMenuActive] = useState<boolean>(false);
    const [dropDown, setDropDown] = useState<boolean>(false);
    const { to, link, submenu } = item;

    const isSubMenuVisible = useCallback(() => {
        !drop && setSubMenuActive(true);
    }, [drop]);
    const isSubMenuHidden = useCallback(() => {
        !drop && setSubMenuActive(false);
    }, [drop]);

    const isToggleDropDown = useCallback(() => {
        submenu && drop && setDropDown(!dropDown);
    }, [dropDown, drop, submenu]);

    return (
        <LiStyled
            onMouseLeave={isSubMenuHidden}
            onMouseEnter={isSubMenuVisible}
            onClick={isToggleDropDown}
        >
            {drop && submenu ? (
                <DropDownStyled>{link}</DropDownStyled>
            ) : (
                <LinkStyled
                    to={to}
                    onClick={ButtonDisabled}
                    className={subMenuActive ? "active" : ""}
                >
                    {link}
                </LinkStyled>
            )}

            {submenu ? (
                <SubMenuBlock
                    tog={tog}
                    subMenuActive={subMenuActive}
                    drop={drop}
                    dropdown={dropDown}
                >
                    {submenu?.map((item, idx) => (
                        <SubMenu
                            to={item.to}
                            key={idx}
                            onClick={ButtonDisabled}
                        >
                            {item.title}
                        </SubMenu>
                    ))}
                </SubMenuBlock>
            ) : null}
        </LiStyled>
    );
};

export default MenuList;

const LiStyled = styled.li`
    position: relative;
    height: inherit;
    box-sizing: border-box;
    margin: 0 17px;
`;
const LinkStyled = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;
    height: inherit;
    font-size: 18px;
    color: ${color.black03};
    font-family: "Ms-M";
    padding: 0 17px;
    box-sizing: border-box;

    &.active::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 3px;
        background: ${color.black06};
    }
`;
const DropDownStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: inherit;
    font-size: 18px;
    color: ${color.black03};
    font-family: "Ms-M";
    padding: 5px 0;
    margin: 5px 0;
    cursor: pointer;
    box-sizing: border-box;
`;
const SubMenuBlock = styled.div<{
    tog: string | undefined;
    subMenuActive: boolean;
    drop: boolean | undefined;
    dropdown: boolean;
}>`
    display: none;
    ${(props) =>
        !props.drop &&
        css`
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 81px;
            width: 150px;
            height: min-content;
            padding: 10px 0;
            box-sizing: border-box;
            background: ${color.white02};
            border-radius: 0px 0px 5px 5px;
            text-align: center;
            box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
            z-index: 99999;
            visibility: hidden;
        `}

    ${(props) =>
        props.subMenuActive &&
        css`
            visibility: visible;
        `}
    ${(props) =>
        props.dropdown &&
        css`
            display: block;
            padding-left: 15px;
            a {
                font-size: 14px !important;
            }
        `}
`;
const SubMenu = styled(NavLink)`
    position: relative;
    display: block;
    font-size: 14px;
    color: ${color.black06};
    margin: 5px 10px;
    padding: 10px 0;
    white-space: nowrap;
`;
