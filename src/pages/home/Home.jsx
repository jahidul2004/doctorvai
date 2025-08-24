import FacilitiesMarquee from "./facilitiesMarquee/FacilitiesMarquee";
import FeaturedDoctors from "./featuredDoctors/FeaturedDoctors";
import Header from "./header/Header";
import Testimonials from "./testimonials/Testimonials";
import TopSpecialties from "./topSpecialties/TopSpecialties";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";

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

            {/* Why choose us */}
            <WhyChooseUs></WhyChooseUs>
            {/* Why choose us end */}

            {/* Testimonials */}
            <Testimonials></Testimonials>
            {/* Testimonials end */}
        </div>
    );
};

export default Home;
