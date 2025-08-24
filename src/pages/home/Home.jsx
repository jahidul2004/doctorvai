import FacilitiesMarquee from "./facilitiesMarquee/FacilitiesMarquee";
import FeaturedDoctors from "./featuredDoctors/FeaturedDoctors";
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

            {/* Featured doctors */}
            <FeaturedDoctors></FeaturedDoctors>
            {/* Featured doctors end */}

            {/* Facilities Marquee */}
            <FacilitiesMarquee />
            {/* Facilities Marquee end */}
        </div>
    );
};

export default Home;
