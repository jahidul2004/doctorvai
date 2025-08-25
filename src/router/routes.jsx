import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/home/Home";
import PatientRegister from "../pages/register/PatientRegister";
import PatientLogin from "../pages/login/PatientLogin";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register/patient",
                element: <PatientRegister></PatientRegister>,
            },
            {
                path: "/login/patient",
                element: <PatientLogin></PatientLogin>,
            },
        ],
    },
]);

export default routes;
