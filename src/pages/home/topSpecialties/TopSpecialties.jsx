import React from "react";
import SectionHead from "../../../components/sectionHead/SectionHead";
import SpecialtyCard from "../../../components/specialtyCard/SpecialtyCard";
import neurologyIcon from "../../../assets/specialtyIcons/neurologyIcon.svg";

const TopSpecialties = () => {
    return (
        <div className="py-10 w-[98%] md:w-[96%] lg:w-[90%] mx-auto">
            {/* Section header */}
            <SectionHead
                title="Top Specialties"
                subtitle="Highlighting the Care & Support"
            />
            {/* Section header end */}

            {/* Specialty card */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
                <SpecialtyCard
                    path="/Cardiology"
                    image="https://i.ibb.co.com/JRRmGLNW/photo-1618939304347-e91b1f33d2ab.jpg"
                    icon={neurologyIcon}
                    title={"Neurology"}
                    doctors={10}
                />
            </div>
            {/* Specialty card end */}
        </div>
    );
};

export default TopSpecialties;
