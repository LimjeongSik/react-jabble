import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import ScrollToTop from "./components/ScrollToTop";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <Provider store={store}>
        <CookiesProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </CookiesProvider>
    </Provider>,
);
