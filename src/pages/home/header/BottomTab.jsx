import { FaCalendarCheck } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { GiChemicalDrop } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { TbBuildingHospital } from "react-icons/tb";

const BottomTab = () => {
    return (
        <div
            className="bg-white border border-gray-200 rounded-md p-4 w-[96%] md:w-[92%] lg:w-[90%] 
absolute left-1/2 -translate-x-1/2 -bottom-15"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#dd2590]">
                        <FaCalendarCheck className="text-white" size={22} />
                    </div>
                    <span className="text-lg font-semibold">
                        Book Appointment
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#06aed4]">
                        <HiUsers className="text-white" size={22} />
                    </div>
                    <span className="text-lg font-semibold">
                        Talk to doctors
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#822bd4]">
                        <TbBuildingHospital className="text-white" size={22} />
                    </div>
                    <span className="text-lg font-semibold">
                        Hospital Clinic
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#e04f16]">
                        <FaHeartPulse className="text-white" size={22} />
                    </div>
                    <span className="text-lg font-semibold">Health Care</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#0e9384]">
                        <GiChemicalDrop className="text-white" size={22} />
                    </div>
                    <span className="text-lg font-semibold">Labe Test</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#ef5d38]">
                        <LiaNotesMedicalSolid
                            className="text-white"
                            size={22}
                        />
                    </div>
                    <span className="text-lg font-semibold">Home Care</span>
                </div>
            </div>
        </div>
    );
};

export default BottomTab;
