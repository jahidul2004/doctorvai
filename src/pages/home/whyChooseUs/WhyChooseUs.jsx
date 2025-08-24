import React from "react";
import SectionHead from "../../../components/sectionHead/SectionHead";
import { RiChatFollowUpFill } from "react-icons/ri";
import { LiaSpotify } from "react-icons/lia";
import { GiFirstAidKit } from "react-icons/gi";

const WhyChooseUs = () => {
    return (
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
                        We ensure continuity of care through regular follow-ups
                        and communication, helping you stay on track with health
                        goals.
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
                        We prioritize your needs and preferences, ensuring that
                        you are at the center of your care journey.
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
                        We provide easy access to healthcare services, ensuring
                        that you can receive care when and where you need it.
                    </p>
                </div>
                {/* Card 3 end */}
            </div>
            {/* reason cards end */}
        </div>
    );
};

export default WhyChooseUs;
