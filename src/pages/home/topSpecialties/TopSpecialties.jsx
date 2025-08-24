import React from "react";
import SectionHead from "../../../components/sectionHead/SectionHead";
import SpecialtyCard from "../../../components/specialtyCard/SpecialtyCard";

import neurologyIcon from "../../../assets/specialtyIcons/neurologyIcon.svg";
import neurologyImage from "../../../assets/specialtyIcons/neurologyImage.jpg";

import orthopedicsIcon from "../../../assets/specialtyIcons/orthopedicsIcon.svg";
import orthopedicsImage from "../../../assets/specialtyIcons/orthopedicsImage.jpg";

import cardiologyIcon from "../../../assets/specialtyIcons/cardiologyIcon.svg";
import cardiologyImage from "../../../assets/specialtyIcons/cardiologyImage.jpg";

import pediatricsIcon from "../../../assets/specialtyIcons/pediatricsIcon.svg";
import pediatricsImage from "../../../assets/specialtyIcons/pediatricsImage.jpg";

import psychiatryIcon from "../../../assets/specialtyIcons/psychiatryIcon.svg";
import psychiatryImage from "../../../assets/specialtyIcons/psychiatryImage.jpg";

import endocrinologyIcon from "../../../assets/specialtyIcons/endocrinologyIcon.svg";
import endocrinologyImage from "../../../assets/specialtyIcons/endocrinologyImage.jpg";

import urologyIcon from "../../../assets/specialtyIcons/urologyIcon.svg";
import urologyImage from "../../../assets/specialtyIcons/urologyImage.jpg";

import pulmonologyIcon from "../../../assets/specialtyIcons/pulmonologyIcon.svg";
import pulmonologyImage from "../../../assets/specialtyIcons/pulmonologyImage.jpg";

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
                    path="/Neurology"
                    image={neurologyImage}
                    icon={neurologyIcon}
                    title={"Neurology"}
                    doctors={10}
                />
                <SpecialtyCard
                    path="/Orthopedics"
                    image={orthopedicsImage}
                    icon={orthopedicsIcon}
                    title={"Orthopedics"}
                    doctors={12}
                />
                <SpecialtyCard
                    path="/Cardiology"
                    image={cardiologyImage}
                    icon={cardiologyIcon}
                    title={"Cardiology"}
                    doctors={18}
                />
                <SpecialtyCard
                    path="/Pediatrics"
                    image={pediatricsImage}
                    icon={pediatricsIcon}
                    title={"Pediatrics"}
                    doctors={14}
                />
                <SpecialtyCard
                    path="/Psychiatry"
                    image={psychiatryImage}
                    icon={psychiatryIcon}
                    title={"Psychiatry"}
                    doctors={5}
                />
                <SpecialtyCard
                    path="/Endocrinology"
                    image={endocrinologyImage}
                    icon={endocrinologyIcon}
                    title={"Endocrinology"}
                    doctors={11}
                />
                <SpecialtyCard
                    path="/Urology"
                    image={urologyImage}
                    icon={urologyIcon}
                    title={"Urology"}
                    doctors={11}
                />
                <SpecialtyCard
                    path="/Pulmonology"
                    image={pulmonologyImage}
                    icon={pulmonologyIcon}
                    title={"Pulmonology"}
                    doctors={14}
                />
            </div>
            {/* Specialty card end */}
        </div>
    );
};

export default TopSpecialties;
