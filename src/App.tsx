import { Routes, Route } from "react-router-dom";
import HeaderNavbar from "./components/HeaderNavbar";
import Main from "./page/main/Main";
import Footer from "./components/Footer";
import Login from "./page/login/Login";
import GlobalStyle from "./components/GlobalStyle";
import Register from "./page/register/Register";
import Artists from "./page/artists/Artists";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <HeaderNavbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
