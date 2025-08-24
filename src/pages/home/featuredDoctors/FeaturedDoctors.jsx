import { useEffect, useState } from "react";
import SectionHead from "../../../components/sectionHead/SectionHead";
import DoctorCard from "../../../components/doctorCard/DoctorCard";
import { Link } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";

const FeaturedDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("doctors.json")
            .then((response) => response.json())
            .then((data) => setDoctors(data))
            .catch((error) => console.error("Error fetching doctors:", error));
    }, []);
    return (
        <div className="w-[98%] md:w-[96%] lg:w-[90%] mx-auto my-10">
            {/* Header area */}
            <SectionHead
                title="Featured Doctors"
                subtitle="Meet Our Top Specialists"
            />
            {/* Header area end */}

            {/* Doctors card */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                {doctors?.slice(0, 4)?.map((doctor) => (
                    <DoctorCard key={doctor.id} data={doctor} />
                ))}
            </div>
            {/* Doctors card end */}

            <div className="my-6 md:my-8 lg:my-12 flex items-center justify-center">
                <Link
                    className="btn rounded-full bg-[#012047] text-white"
                    to="/doctors"
                >
                    <FaUserDoctor /> View All Doctors
                </Link>
            </div>
        </div>
    );
};

export default FeaturedDoctors;
