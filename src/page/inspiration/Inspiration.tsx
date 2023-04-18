import BasicLayout from "../../components/layout/BasicLayout";
import InspirationTemplate from "./InspirationTemplate";
import { Routes, Route } from "react-router-dom";
import { useInspiration } from "../../hooks/useInspiration";
import InspirationDetail from "./InspirationDetail";

const Inspiration = () => {
    return (
        <>
            <Routes>
                {useInspiration.map((item) => (
                    <Route
                        path={`${item.id}`}
                        element={<InspirationDetail item={item} />}
                        key={item.id}
                    />
                ))}
                <Route
                    path="/"
                    element={
                        <BasicLayout
                            title="Inspiration"
                            subTitle="Feed your inspiration with our regular columns."
                            children={<InspirationTemplate />}
                        />
                    }
                />
            </Routes>
        </>
    );
};

export default Inspiration;
