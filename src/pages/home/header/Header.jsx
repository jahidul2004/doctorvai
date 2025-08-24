import bg from "../../../assets/background/home-banner-bg-Bke3qugk.png";
import shape1 from "../../../assets/background/banner-bg-05.png";
import shape2 from "../../../assets/background/banner-bg-03.png";
import shape3 from "../../../assets/background/banner-bg-04.png";
import shape4 from "../../../assets/background/banner-bg-02.png";
import doctor from "../../../assets/doctorImages/banner-doctor.svg";
import doctor1 from "../../../assets/doctorImages/doctor-thumb-24.jpg";
import doctor2 from "../../../assets/doctorImages/doctor-thumb-22.jpg";
import doctor3 from "../../../assets/doctorImages/doctor-thumb-23.jpg";
import videoIcon from "../../../assets/icons/video.png";
import starIcon from "../../../assets/icons/banner-icon-01.svg";
import { FaCalendarAlt, FaUserMd } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import BottomTab from "./BottomTab";
const Header = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative mb-20 py-20 max-w-full"
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
            <div className="absolute top-0 left-0 z-[-1]">
                <img src={shape4} alt="Shape" className="h-full object-cover" />
            </div>

            <img className="absolute bottom-30 left-10" src={starIcon} alt="" />
            <img
                className="absolute bottom-120 right-100"
                src={starIcon}
                alt=""
            />
            {/* Shapes end */}
            <div className="w-[98%] md:w-[92%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Information area */}
                <div className="col-span-1 md:col-span-2 flex items-center justify-center">
                    <div>
                        <div className="bg-white p-4 rounded-full w-max flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <img
                                    className="w-12 h-12 rounded-full border-2 border-[#e2edff] relative top-0"
                                    src={doctor1}
                                    alt=""
                                />
                                <img
                                    className="w-12 h-12 rounded-full border-2 border-[#e2edff] relative -l-1"
                                    src={doctor2}
                                    alt=""
                                />
                                <img
                                    className="w-12 h-12 rounded-full border-2 border-[#e2edff] relative -l-1"
                                    src={doctor3}
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

                        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mt-6 text-[#012047] tracking-wide">
                            Discover Health: Find Your{" "}
                            <br className="hidden md:block" /> Trusted{" "}
                            <img
                                className="w-[80px] mx-2 inline bg-[#000f2833] px-3 rounded-full"
                                src={videoIcon}
                                alt=""
                            />{" "}
                            <span className="text-[#06aed4]">Doctors</span>{" "}
                            Today
                        </h1>

                        {/* Search box */}
                        <div className="grid grid-cols-2 md:flex gap-2 md:gap-0 items-center bg-white border border-[#06aed4] md:rounded-full shadow-sm overflow-hidden w-full max-w-4xl mx-auto p-2 mt-6 rounded-lg">
                            {/* Doctors */}
                            <div className="flex items-center gap-2 px-4 py-3 border-r border-[#06aed4] w-full border md:border-0 rounded-full">
                                <FaUserMd className="text-[#06aed4] text-lg" />
                                <input
                                    type="text"
                                    placeholder="Search doctors, clinics, hospital"
                                    className="w-full outline-none placeholder:text-gray-400"
                                />
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-2 px-4 py-3 border-r border-[#06aed4] md:w-60 border md:border-0 w-full rounded-full">
                                <FaLocationDot className="text-[#06aed4] text-lg" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full outline-none placeholder:text-gray-400"
                                />
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-2 px-4 py-3 border-r border-[#06aed4] md:w-48 w-full border md:border-0 rounded-full">
                                <FaCalendarAlt className="text-[#06aed4] text-lg" />
                                <input
                                    type="date"
                                    className="w-full outline-none text-gray-600"
                                />
                            </div>

                            {/* Search Button */}
                            <button className="btn rounded-full bg-[#06aed4] hover:bg-[#0599b9] text-white p-6 flex items-center gap-2 ml-2 w-full md:w-max">
                                <FaUserMd className="text-white" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                {/* Information area end */}

                {/* Image area */}
                <div className="relative">
                    <img
                        className="w-full h-full z-[100]"
                        src={doctor}
                        alt="Health"
                    />

                    <div className="absolute top-0 right-12 md:right-18 z-[-1] w-[70%] h-[70%] bg-gradient-to-b from-[#0073ff] to-[#9cecfe] rotate-[-15deg] rounded-t-4xl"></div>

                    <div className="absolute bottom-90 md:bottom-5 bg-[#012047] text-white p-3 rounded-md text-center">
                        <h1 className="font-bold text-lg">15K+</h1>
                        <p>Satisfied Patients</p>
                    </div>
                    <div className="absolute top-40 right-0 bg-white p-3 rounded-md text-center">
                        <h1 className="font-bold text-lg">1K+</h1>
                        <p>Appointments</p>
                    </div>
                </div>
                {/* Image area end */}
            </div>

            {/* Bottom Tab */}
            <BottomTab></BottomTab>
            {/* Bottom Tab end */}
        </div>
    );
};

export default Header;
