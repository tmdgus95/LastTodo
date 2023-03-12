import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import GlobalStyle from "./assets/styles/globalStyles";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Todo from "./components/Todo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "todo",
                element: <Todo />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
    </ThemeProvider>,
    // </React.StrictMode>
);
