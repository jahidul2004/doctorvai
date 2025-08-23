import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <div className="font-bold text-[#0E82FD]">Hello world!</div>,
    },
]);

export default routes;
