import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App.tsx";
import {Teste2, Teste3} from "../views/teste.tsx";
import ApplicationsView from "../views/Applications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "aplicacoes",
                element: <ApplicationsView/>,
            },
            {
                path: "option2",
                element: <Teste2/>,
            },
            {
                path: "option3",
                element: <Teste3/>,
            },
        ]
    },
    {
        path: "login",
        element: <div>Login</div>,
    },
]);

export default router;