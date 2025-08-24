import { FaHeart, FaRegCalendarCheck, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

const DoctorCard = ({ data }) => {
    console.log();
    return (
        <div className="rounded-lg border border-gray-200">
            {/* Image area */}
            <div className="relative">
                <img
                    className="w-full h-[200px] object-cover"
                    src={data?.image}
                    alt={data?.name}
                />

                <div className="absolute top-4 left-4 bg-[#E04F16] text-white px-1 rounded-md">
                    {data?.rating ? data.rating : "⭐ 4.5"}
                </div>
                <div className="w-8 h-8 rounded-full bg-white absolute top-2 right-2 flex items-center justify-center">
                    <FaHeart className="text-gray-300" />
                </div>
            </div>
            {/* Image area end */}

            {/* Details area */}
            <div className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-[#dd2590] font-semibold border-l-2 border-[#dd2590] pl-2 flex items-center">
                        {data?.department}
                    </h1>
                    <p
                        className={`btn btn-success btn-soft px-1 rounded-full btn-sm`}
                    >
                        {" "}
                        •{data?.status}
                    </p>
                </div>

                <div className="mt-2 border-b border-dashed border-gray-300 pb-3">
                    <h1 className="text-lg font-bold text-[#012047]">
                        {data?.name}
                    </h1>
                    <span className="flex items-center gap-1 text-gray-500">
                        {data?.degree}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                        <p className="text-gray-500">Consultation fee</p>
                        <p className="text-xl font-bold text-[#e04f16]">
                            ${data?.fees}
                        </p>
                    </div>
                    <div className="flex items-center justify-end">
                        <Link className="btn btn-sm bg-[#012047] text-white rounded-full">
                            <FaRegCalendarCheck />
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
            {/* Details area end */}
        </div>
    );
};

export default DoctorCard;
