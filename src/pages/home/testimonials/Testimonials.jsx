import SectionHead from "../../../components/sectionHead/SectionHead";
import testimonialBg from "../../../assets/background/testimonial-bg.jpg";
import quoteIcon from "../../../assets/icons/quote-icon.svg";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
    const comments = [
        {
            rating: "⭐⭐⭐⭐⭐",
            title: "Excellent Service",
            description:
                "The doctors are very professional and attentive. Highly recommended for all healthcare needs.",
            userName: "Michel Arian",
            userLocation: "United States",
            userImg: "https://i.pravatar.cc/150?img=1",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            title: "Friendly Staff",
            description:
                "Staff is friendly and helpful. The appointment process was smooth and easy.",
            userName: "David Alaba",
            userLocation: "United States",
            userImg: "https://i.pravatar.cc/150?img=2",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            title: "Quick Response",
            description:
                "I got my consultation on time and the doctor answered all my questions properly.",
            userName: "Maria Garcia",
            userLocation: "United Kingdom",
            userImg: "https://i.pravatar.cc/150?img=3",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            title: "Highly Professional",
            description:
                "Doctors are highly professional and the environment is clean and safe.",
            userName: "John Doe",
            userLocation: "Canada",
            userImg: "https://i.pravatar.cc/150?img=4",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            title: "Great Experience",
            description:
                "Had a wonderful experience with the online consultation. Very convenient.",
            userName: "Emma Watson",
            userLocation: "Australia",
            userImg: "https://i.pravatar.cc/150?img=5",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            title: "Reliable Service",
            description:
                "Reliable and trustworthy service. I felt safe and cared for during my visit.",
            userName: "Liam Smith",
            userLocation: "New Zealand",
            userImg: "https://i.pravatar.cc/150?img=6",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            title: "Top Notch Care",
            description:
                "Top notch care from the medical team. Very impressed with their expertise.",
            userName: "Sophia Lee",
            userLocation: "Singapore",
            userImg: "https://i.pravatar.cc/150?img=7",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            title: "Amazing Experience",
            description:
                "The overall experience was amazing. Quick responses and helpful staff.",
            userName: "Noah Johnson",
            userLocation: "Ireland",
            userImg: "https://i.pravatar.cc/150?img=8",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            title: "Highly Recommended",
            description:
                "I highly recommend this platform for anyone seeking professional medical help.",
            userName: "Olivia Brown",
            userLocation: "South Africa",
            userImg: "https://i.pravatar.cc/150?img=9",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            title: "Exceptional Support",
            description:
                "Exceptional support from start to finish. The team made me feel comfortable.",
            userName: "Ethan Davis",
            userLocation: "Germany",
            userImg: "https://i.pravatar.cc/150?img=10",
        },
    ];

    return (
        <div
            style={{
                backgroundImage: `url(${testimonialBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className="bg-gradient-to-r from-[#e3effd] via-white to-[#e3effd] min-h-96 py-8"
        >
            {/* Header area */}
            <SectionHead
                title="Testimonials"
                subtitle="
                18k+ Trust DoctorVai Worldwide"
            />
            {/* Header area end */}

            {/* Main content */}
            <div className="w-[98%] md:w-[96%] lg:w-[90%] mx-auto grid grid-cols-3 gap-4 md:gap-8">
                <Marquee
                    pauseOnHover={true}
                    speed={30}
                    gradient={false}
                    className="col-span-3"
                >
                    {comments.map((comment, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 mx-2 w-[300px] md:w-[350px] lg:w-[400px] flex-shrink-0"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-yellow-500 text-lg">
                                    {comment.rating}
                                </div>
                                <img
                                    src={quoteIcon}
                                    alt="Quote Icon"
                                    className="w-6 h-6 mr-2"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {comment.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {comment.description}
                            </p>
                            <div className="flex items-center">
                                <img
                                    src={comment.userImg}
                                    alt={comment.userName}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-semibold">
                                        {comment.userName}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {comment.userLocation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
            {/* Man content end */}

            {/* Stats */}
            <div className="w-[98%] md:w-[96%] lg:w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 my-10">
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-[#00c462] rounded-lg flex items-center justify-center">
                        <h1 className="text-xl font-bold text-white">300+</h1>
                    </div>
                    <p className="mt-2 text-gray-500">Doctors Available</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-[#b0c400] rounded-lg flex items-center justify-center">
                        <h1 className="text-xl font-bold text-white">18+</h1>
                    </div>
                    <p className="mt-2 text-gray-500">Specialties</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-[#0c82e2] rounded-lg flex items-center justify-center">
                        <h1 className="text-xl font-bold text-white">97+</h1>
                    </div>
                    <p className="mt-2 text-gray-500">Hospitals & Clinics</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-[#d35a0a] rounded-lg flex items-center justify-center">
                        <h1 className="text-xl font-bold text-white">310+</h1>
                    </div>
                    <p className="mt-2 text-gray-500">Lab Test Available</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-[#d30ac9] rounded-lg flex items-center justify-center">
                        <h1 className="text-xl font-bold text-white">2310+</h1>
                    </div>
                    <p className="mt-2 text-gray-500">Patients Served</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-[#0ccfb5] rounded-lg flex items-center justify-center">
                        <h1 className="text-xl font-bold text-white">42590+</h1>
                    </div>
                    <p className="mt-2 text-gray-500 text-center">
                        Hours Video Consult
                    </p>
                </div>
            </div>
            {/* Stats end */}
        </div>
    );
};

export default Testimonials;
