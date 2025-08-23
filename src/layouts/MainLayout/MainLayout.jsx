import Footer from "../../shared/footer/Footer";
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

            {/* Footer */}
            <Footer></Footer>
            {/* Footer end */}
        </>
    );
};

export default MainLayout;
