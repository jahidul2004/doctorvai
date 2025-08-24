import React from "react";
import SectionHead from "../../../components/sectionHead/SectionHead";
import { RiChatFollowUpFill, RiMastercardLine } from "react-icons/ri";
import { LiaSpotify } from "react-icons/lia";
import { GiFirstAidKit } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const WhyChooseUs = () => {
    return (
        <div>
            <div className="my-20 w-[98%] md:w-[96%] lg:w-[90%] mx-auto">
                {/* Header area */}
                <SectionHead
                    title="Why Choose Us?"
                    subtitle="The Best Healthcare Services"
                />
                {/* Header area end */}

                {/* reason cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card 1 */}
                    <div className="border-l border-dashed border-gray-300 pl-4">
                        <h1 className="flex items-center gap-2 text-xl font-bold text-[#012047]">
                            <RiChatFollowUpFill className="text-[#FFB800]" />
                            Follow-Up Care
                        </h1>
                        <p className="text-gray-400 leading-6">
                            We ensure continuity of care through regular
                            follow-ups and communication, helping you stay on
                            track with health goals.
                        </p>
                    </div>
                    {/* Card 1 end */}
                    {/* Card 2 */}
                    <div className="border-l border-dashed border-gray-300 pl-4">
                        <h1 className="flex items-center gap-2 text-xl font-bold text-[#012047]">
                            <LiaSpotify className="text-[#0077ff]" />
                            Patient-Centered Approach
                        </h1>
                        <p className="text-gray-400 leading-6">
                            We prioritize your needs and preferences, ensuring
                            that you are at the center of your care journey.
                        </p>
                    </div>
                    {/* Card 2 end */}
                    {/* Card 3 */}
                    <div className="border-l border-dashed border-gray-300 pl-4">
                        <h1 className="flex items-center gap-2 text-xl font-bold text-[#012047]">
                            <GiFirstAidKit className="text-[#ff00d4]" />
                            Convenient Access
                        </h1>
                        <p className="text-gray-400 leading-6">
                            We provide easy access to healthcare services,
                            ensuring that you can receive care when and where
                            you need it.
                        </p>
                    </div>
                    {/* Card 3 end */}
                </div>
                {/* reason cards end */}
            </div>

            {/* 2nd section start */}
            <div className="bg-[#000f28]">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 w-[98%] md:w-[96%] lg:w-[90%] mx-auto py-20">
                    {/* Gallery layout */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            className="col-span-2 rounded-lg"
                            src="https://i.ibb.co.com/4wNYdSGN/book-01.jpg"
                            alt="Gallery Image 1"
                        />
                        <img
                            className="rounded-lg"
                            src="https://i.ibb.co.com/G3n2DyKv/book-02.jpg"
                            alt="Gallery Image 2"
                        />
                        <img
                            className="rounded-lg"
                            src="https://i.ibb.co.com/jZwSZtqJ/book-03.jpg"
                            alt="Gallery Image 3"
                        />
                    </div>
                    {/* Gallery layout end */}

                    {/* Information layout */}
                    <div>
                        <h2 className="bg-[#016AE7] text-white w-max p-2 rounded-full">
                            - Why Book With Us -
                        </h2>
                        <p className="text-3xl font-bold text-white mt-4">
                            We are committed to understanding <br /> your{" "}
                            <span className="text-[#016AE7]">
                                unique needs and delivering care.
                            </span>
                        </p>
                        <p className="text-white mt-4 text-sm">
                            As a trusted healthAs a trusted healthcare provider
                            in our community, we are passionate about promoting
                            health and wellness beyond the clinic. We actively
                            engage in community outreach programs, health fairs,
                            and educational workshop.
                        </p>
                        {/* Accordion */}
                        <div className="mt-6 flex flex-col gap-4">
                            <div className="collapse collapse-plus text-white border border-gray-800 bg-[#00122e]">
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    defaultChecked
                                />
                                <div className="collapse-title font-semibold">
                                    01. Our Vision
                                </div>
                                <div className="collapse-content text-sm">
                                    We envision a community where everyone has
                                    access to high-quality healthcare and the
                                    resources they need to lead healthy,
                                    fulfilling lives.
                                </div>
                            </div>
                            <div className="collapse collapse-plus text-white border border-gray-800 bg-[#00122e]">
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    defaultChecked
                                />
                                <div className="collapse-title font-semibold">
                                    02. Our Mission
                                </div>
                                <div className="collapse-content text-sm">
                                    We envision a community where everyone has
                                    access to high-quality healthcare and the
                                    resources they need to lead healthy,
                                    fulfilling lives.
                                </div>
                            </div>
                            <div className="collapse collapse-plus text-white border border-gray-800 bg-[#00122e]">
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    defaultChecked
                                />
                                <div className="collapse-title font-semibold">
                                    03. How to Book an Appointment
                                </div>
                                <div className="collapse-content text-sm">
                                    To book an appointment, please visit our
                                    website and use the online booking system,
                                    or contact our office directly at [phone
                                    number] to speak with a member of our staff.
                                </div>
                            </div>
                            <div className="collapse collapse-plus text-white border border-gray-800 bg-[#00122e]">
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    defaultChecked
                                />
                                <div className="collapse-title font-semibold">
                                    04. How to contact us
                                </div>
                                <div className="collapse-content text-sm">
                                    Please contact with this number
                                    +88038487*****
                                </div>
                            </div>
                        </div>
                        {/* Accordion end */}
                    </div>
                    {/* Information layout end */}
                </div>

                {/* Bottom feature cards section */}
                <div className="w-[98%] md:w-[96%] lg:w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pb-20">
                    {/* Card 1 */}
                    <div className="text-white flex flex-col items-center text-center">
                        <div className="bg-[#0381ff] w-18 h-18 rounded-lg flex items-center justify-center">
                            <FaUserDoctor size={28} />
                        </div>
                        <div className="mt-2">
                            <h1 className="font-bold text-lg my-2">
                                Search For Doctors
                            </h1>
                            <p className="text-sm text-gray-400">
                                Search for a doctor based on specialization,
                                location, or availability for your Treatements
                            </p>
                        </div>
                    </div>
                    {/* Card 1 end */}
                    {/* Card 2 */}
                    <div className="text-white flex flex-col items-center text-center">
                        <div className="bg-[#ff5f03] w-18 h-18 rounded-lg flex items-center justify-center">
                            <CgProfile size={28} />
                        </div>
                        <div className="mt-2">
                            <h1 className="font-bold text-lg my-2">
                                Check Doctor Profile
                            </h1>
                            <p className="text-sm text-gray-400">
                                View detailed information about a specific
                                doctor, including their qualifications,
                                experience, and patient reviews.
                            </p>
                        </div>
                    </div>
                    {/* Card 2 end */}
                    {/* Card 3 */}
                    <div className="text-white flex flex-col items-center text-center">
                        <div className="bg-[#af03ff] w-18 h-18 rounded-lg flex items-center justify-center">
                            <FaRegCalendarAlt size={28} />
                        </div>
                        <div className="mt-2">
                            <h1 className="font-bold text-lg my-2">
                                Schedule Appointment
                            </h1>
                            <p className="text-sm text-gray-400">
                                After choose your preferred doctor, select a
                                convenient time slot, & confirm your
                                appointment.
                            </p>
                        </div>
                    </div>
                    {/* Card 3 end */}
                    {/* Card 4 */}
                    <div className="text-white flex flex-col items-center text-center">
                        <div className="bg-[#e41a1a] w-18 h-18 rounded-lg flex items-center justify-center">
                            <RiMastercardLine size={28} />
                        </div>
                        <div className="mt-2">
                            <h1 className="font-bold text-lg my-2">
                                Get your solution
                            </h1>
                            <p className="text-sm text-gray-400">
                                Discuss your health concerns with the doctor and
                                receive the personalized advice & with solution.
                            </p>
                        </div>
                    </div>
                    {/* Card 1 end */}
                </div>
                {/* Bottom feature cards section end */}
            </div>
            {/* 2nd section end */}
        </div>
    );
};

export default WhyChooseUs;
