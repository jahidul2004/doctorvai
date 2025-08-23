import NavBar from "../../shared/navbar/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            {/* NavBar */}
            <NavBar />
            {/* Navbar end */}

            {/* Main content */}
            <main>
                <Outlet />
            </main>
            {/* Main content end */}
        </>
    );
};

export default MainLayout;
