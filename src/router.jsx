import { createBrowserRouter } from "react-router-dom";
import Root from './routes/Root.jsx'
import ErrorPage from "./ErrorPage.jsx";
import Login from "./Routes/Login.jsx";
import Flights from "./routes/Flights.jsx";

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
        path: "flights",
        element: <Flights />,
        errorElement: <ErrorPage />
    },


]);

export default router