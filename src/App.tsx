import { Routes, Route } from "react-router-dom";
import HeaderNavbar from "./components/HeaderNavbar";
import Main from "./page/main/Main";
import Footer from "./components/Footer";
import Login from "./page/login/Login";
import GlobalStyle from "./components/GlobalStyle";
import Register from "./page/register/Register";
import Artists from "./page/artists/Artists";
import Archive from "./page/archive/Archive";
import Inspiration from "./page/inspiration/Inspiration";

import { useAppDispatch } from "./hook";
import { Cookies } from "react-cookie";
import { useEffect } from "react";
import { loginCheck, loginUserName, asyncAuth } from "./slices/auth";
import Mypage from "./page/mypage/Mypage";
import Mypage1 from "./page/mypage/Mypage1";
import Mypage2 from "./page/mypage/Mypage2";
import Mypage3 from "./page/mypage/Mypage3";
import Mypage4 from "./page/mypage/Mypage4";
import Mypage5 from "./page/mypage/Mypage5";
import MypageTemplate from "./page/mypage/MypageTemplate";

function App() {
    const cookie = new Cookies().get("user");
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!cookie) return;
        dispatch(loginCheck());
        dispatch(asyncAuth(cookie))
            .then(async (res) => {
                loginUserName(cookie);
            })
            .catch((e) => console.error(e));
    }, [cookie, dispatch]);

    return (
        <div className="App">
            <GlobalStyle />
            <HeaderNavbar />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/inspiration/*" element={<Inspiration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/mypage" element={<Mypage />}>
                    <Route
                        path="mypage1"
                        element={<MypageTemplate myPageView={<Mypage1 />} />}
                    />
                    <Route
                        path="mypage2"
                        element={<MypageTemplate myPageView={<Mypage2 />} />}
                    />
                    <Route
                        path="mypage3"
                        element={<MypageTemplate myPageView={<Mypage3 />} />}
                    />
                    <Route
                        path="mypage4"
                        element={<MypageTemplate myPageView={<Mypage4 />} />}
                    />
                    <Route
                        path="mypage5"
                        element={<MypageTemplate myPageView={<Mypage5 />} />}
                    />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
