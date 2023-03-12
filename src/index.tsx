import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import GlobalStyle from "./assets/styles/globalStyles";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    // </React.StrictMode>
);
