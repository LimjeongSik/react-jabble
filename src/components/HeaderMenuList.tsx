import { Link } from "react-router-dom";

interface Props {
    ButtonDisabled?: React.MouseEventHandler<HTMLAnchorElement>;
}

const MenuListArray = [
    {
        id: 1,
        to: "/artists",
        link: "Artists",
    },
    {
        id: 2,
        to: "/archive",
        link: "Archive",
    },
    {
        id: 3,
        to: "/inspiration",
        link: "Inspiration",
    },
];

const HeaderMenuList = ({ ButtonDisabled }: Props) => {
    return (
        <>
            <ul>
                {MenuListArray.map((item) => (
                    <li key={item.id}>
                        <Link to={item.to} onClick={ButtonDisabled}>
                            {item.link}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default HeaderMenuList;
