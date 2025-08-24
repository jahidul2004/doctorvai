import SectionHead from "../../../components/sectionHead/SectionHead";
import testimonialBg from "../../../assets/background/testimonial-bg.jpg";
import quoteIcon from "../../../assets/icons/quote-icon.svg";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
    return (
        <div
            style={{ backgroundImage: `url(${testimonialBg})` }}
            className="bg-gradient-to-r from-[#e3effd] via-white to-[#e3effd] min-h-96 py-8"
        >
            {/* Header area */}
            <SectionHead
                title="Testimonials"
                subtitle="
                15k Users Trust Doccure Worldwide"
            />
            {/* Header area end */}

            {/* Main content */}
            <div className="w-[98%] md:w-[96%] lg:w-[90%] mx-auto grid grid-cols-3 gap-4 md:gap-8">
                {/* Comment 1 */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                    {/* Top panel */}
                    <div className="flex items-center justify-between">
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <img src={quoteIcon} alt="" />
                    </div>
                    {/* Top panel end */}

                    {/* Description */}
                    <div className="my-4">
                        <h1 className=" text-lg mb-1">This is comment title</h1>
                        <p className="text-sm text-gray-500">
                            This is the comment description. Comment description
                            area is fixed by the layout. Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    {/* Description end */}

                    {/* User related */}
                    <div className="flex items-center gap-2">
                        <img
                            className="object-cover w-12 h-12 rounded-full border border-[#2582ec]"
                            src="https://i.ibb.co.com/gLMH0fB8/doctor-grid-01.jpg"
                            alt=""
                        />
                        <div>
                            <h1 className="text-lg font-bold">Michel Arian</h1>
                            <p className="text-sm text-gray-500">
                                United States
                            </p>
                        </div>
                    </div>
                    {/* User related end */}
                </div>
                {/* Comment 1 end */}
                {/* Comment 2 */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                    {/* Top panel */}
                    <div className="flex items-center justify-between">
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <img src={quoteIcon} alt="" />
                    </div>
                    {/* Top panel end */}

                    {/* Description */}
                    <div className="my-4">
                        <h1 className=" text-lg mb-1">This is comment title</h1>
                        <p className="text-sm text-gray-500">
                            This is the comment description. Comment description
                            area is fixed by the layout. Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    {/* Description end */}

                    {/* User related */}
                    <div className="flex items-center gap-2">
                        <img
                            className="object-cover w-12 h-12 rounded-full border border-[#2582ec]"
                            src="https://i.ibb.co.com/Q3JmB8NZ/doctor-grid-05.jpg"
                            alt=""
                        />
                        <div>
                            <h1 className="text-lg font-bold">David Alaba</h1>
                            <p className="text-sm text-gray-500">
                                United States
                            </p>
                        </div>
                    </div>
                    {/* User related end */}
                </div>
                {/* Comment 2 end */}
                {/* Comment 3 */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                    {/* Top panel */}
                    <div className="flex items-center justify-between">
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <img src={quoteIcon} alt="" />
                    </div>
                    {/* Top panel end */}

                    {/* Description */}
                    <div className="my-4">
                        <h1 className=" text-lg mb-1">This is comment title</h1>
                        <p className="text-sm text-gray-500">
                            This is the comment description. Comment description
                            area is fixed by the layout. Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    {/* Description end */}

                    {/* User related */}
                    <div className="flex items-center gap-2">
                        <img
                            className="object-cover w-12 h-12 rounded-full border border-[#2582ec]"
                            src="https://i.ibb.co.com/1Jr2vJ3v/doctor-grid-04.jpg"
                            alt=""
                        />
                        <div>
                            <h1 className="text-lg font-bold">Maria Garcia</h1>
                            <p className="text-sm text-gray-500">
                                United Kingdom
                            </p>
                        </div>
                    </div>
                    {/* User related end */}
                </div>
                {/* Comment 3 end */}
            </div>
            {/* Man content end */}
        </div>
    );
};

export default Testimonials;
