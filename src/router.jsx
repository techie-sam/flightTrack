import { createBrowserRouter } from "react-router-dom";
import Root from './routes/Root.jsx'
import ErrorPage from "./ErrorPage.jsx";
import Login from "./Routes/Login.jsx";
import Dashboard from "./routes/Dashboard.jsx";

// import Login from "./Routes/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />
    },


]);

export default router