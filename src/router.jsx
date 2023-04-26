import { createBrowserRouter } from "react-router-dom";
import App from './routes/App.jsx'

// import Login from "./Routes/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    
]);

export default router