import BasicLayout from "../../components/layout/BasicLayout";
import ArchiveView from "./ArchiveView";

const Archive = () => {
    return (
        <BasicLayout
            title="Archvie"
            subTitle="Look Amazing work"
            children={<ArchiveView />}
        />
    );
};

export default Archive;
