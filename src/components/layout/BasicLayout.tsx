import styled from "styled-components";
import { color } from "../../assets/colors";
import MainTitle from "../MainTitle";

interface Props {
    title: string;
    subTitle: string;
    children: React.ReactNode;
}

const BasicLayout = ({ title, subTitle, children }: Props) => {
    return (
        <BasicLayoutSyled>
            <div className="border__line">
                <MainTitle title={title} subtitle={subTitle} />
            </div>
            {children}
        </BasicLayoutSyled>
    );
};

export default BasicLayout;

const BasicLayoutSyled = styled.div`
    width: 100%;
    max-width: 1400px;
    min-height: 100%;
    margin: 70px auto;
    padding: 0 20px;
    box-sizing: border-box;
    & > .border__line {
        border-bottom: 1px solid ${color.gray03};
        padding-bottom: 45px;
        h2 {
            margin-bottom: 24px;
            font-family: "Ms-R";
        }
        span {
            color: ${color.black04};
        }
        @media screen and (max-width: 768px) {
            padding-bottom: 25px;
            h2 {
                margin-bottom: 12px;
            }
        }
    }
    @media screen and (max-width: 960px) {
        margin: 20px auto;
    }
`;
