import bg from "../../../assets/background/home-banner-bg-Bke3qugk.png";
import shape1 from "../../../assets/background/banner-bg-05.png";
import shape2 from "../../../assets/background/banner-bg-03.png";
import shape3 from "../../../assets/background/banner-bg-04.png";
import doctor from "../../../assets/doctorImages/banner-doctor.svg";
import videoIcon from "../../../assets/icons/video.png";
import { FaCalendarAlt, FaUserMd } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Header = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative mb-20 pt-10"
        >
            {/* Shapes */}
            <div className="absolute top-0 right-0 z-[-1]">
                <img src={shape1} alt="Shape" className="h-full object-cover" />
            </div>

            <div className="absolute bottom-0 left-0 z-[-1]">
                <img src={shape2} alt="Shape" className="h-full object-cover" />
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <img src={shape3} alt="Shape" className="h-full object-cover" />
            </div>
            {/* Shapes end */}
            <div className="w-[98%] md:w-[92%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Information area */}
                <div className="col-span-1 md:col-span-2 flex items-center justify-center">
                    <div>
                        <div className="bg-white p-4 rounded-full w-max flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <img
                                    className="w-12 h-12 rounded-full border-2 border-[#e2edff] relative top-0"
                                    src={doctor}
                                    alt=""
                                />
                                <img
                                    className="w-12 h-12 rounded-full border-2 border-[#e2edff] relative -l-1"
                                    src={doctor}
                                    alt=""
                                />
                                <img
                                    className="w-12 h-12 rounded-full border-2 border-[#e2edff] relative -l-1"
                                    src={doctor}
                                    alt=""
                                />
                            </div>

                            <div>
                                <h1 className="text-lg font-bold text-[#000F28]">
                                    5K+ Appointments
                                </h1>
                                <p className="text-sm text-[#6B7280]">
                                    ⭐⭐⭐⭐⭐ 5.0 Ratings
                                </p>
                            </div>
                        </div>

                        <h1 className="text-5xl font-bold mt-6 text-[#000F28] tracking-wide">
                            Discover Health: Find Your <br /> Trusted{" "}
                            <img
                                className="w-[80px] mx-2 inline bg-[#000f2833] px-3 rounded-full"
                                src={videoIcon}
                                alt=""
                            />{" "}
                            <span className="text-[#06aed4]">Doctors</span>{" "}
                            Today
                        </h1>

                        {/* Search box */}
                        <div className="flex items-center bg-white border border-[#06aed4] rounded-full shadow-sm overflow-hidden w-full max-w-4xl mx-auto p-2 mt-6">
                            {/* Doctors */}
                            <div className="flex items-center gap-2 px-4 py-3 border-r border-[#06aed4] w-full">
                                <FaUserMd className="text-[#06aed4] text-lg" />
                                <input
                                    type="text"
                                    placeholder="Search doctors, clinics, hospital"
                                    className="w-full outline-none placeholder:text-gray-400"
                                />
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-2 px-4 py-3 border-r border-[#06aed4] w-60">
                                <FaLocationDot className="text-[#06aed4] text-lg" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full outline-none placeholder:text-gray-400"
                                />
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-2 px-4 py-3 border-r border-[#06aed4] w-48">
                                <FaCalendarAlt className="text-[#06aed4] text-lg" />
                                <input
                                    type="date"
                                    className="w-full outline-none text-gray-600"
                                />
                            </div>

                            {/* Search Button */}
                            <button className="btn rounded-full bg-[#06aed4] hover:bg-[#0599b9] text-white p-6 flex items-center gap-2 ml-2">
                                <FaUserMd className="text-white" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                {/* Information area end */}

                {/* Image area */}
                <div className="">
                    <img
                        className="w-full h-full z-[100]"
                        src={doctor}
                        alt="Health"
                    />
                </div>
                {/* Image area end */}
            </div>
        </div>
    );
};

export default Header;
