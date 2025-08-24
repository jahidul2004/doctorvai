import Header from "./header/Header";
import TopSpecialties from "./topSpecialties/TopSpecialties";

const Home = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* Header end */}

            {/* Top specialties */}
            <TopSpecialties></TopSpecialties>
            {/* Top specialties end */}
        </div>
    );
};

export default Home;
