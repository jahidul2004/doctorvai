import { IoLogoGooglePlaystore } from "react-icons/io5";
import SectionHead from "../../../components/sectionHead/SectionHead";
import { FaAppStore } from "react-icons/fa";
import mobileImage from "../../../assets/images/mobile-img.png";

import appBg2 from "../../../assets/background/app-bg-02.png";
import appBg3 from "../../../assets/background/app-bg-03.png";
import appBg4 from "../../../assets/background/app-bg-04.png";

import playStoreLogo from "../../../assets/logo/google-play-01.svg";
import appStoreLogo from "../../../assets/logo/app-store-01.svg";
import { Link } from "react-router-dom";

const FAQ = () => {
    return (
        <div className="my-10 py-10">
            {/* Header area */}
            <SectionHead
                title="Frequently Asked Questions"
                subtitle="Your questions answered"
            />
            {/* Header area end */}

            {/* Questions */}
            <div className="w-[98%] md:w-[85%] lg:w-[75%] mx-auto flex flex-col gap-4">
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold">
                        How do I book an appointment with a doctor?
                    </div>
                    <div className="collapse-content text-sm text-gray-500">
                        Yes, simply visit our website and log in or create an
                        account. Search for a doctor based on specialization,
                        location, or availability & confirm your booking.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">
                        Can I request a specific doctor when booking my
                        appointment?
                    </div>
                    <div className="collapse-content text-sm text-gray-500">
                        Yes, you can usually request a specific doctor when
                        booking your appointment, though availability may vary
                        based on their schedule.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">
                        What should I do if I need to cancel or reschedule my
                        appointment?
                    </div>
                    <div className="collapse-content text-sm text-gray-500">
                        If you need to cancel or reschedule your appointment,
                        contact the doctor as soon as possible to inform them
                        and to reschedule for another available time slot.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">
                        What if I'm running late for my appointment?
                    </div>
                    <div className="collapse-content text-sm text-gray-500">
                        If you know you will be late, it's courteous to call the
                        doctor's office and inform them. Depending on their
                        policy and schedule, they may be able to accommodate you
                        or reschedule your appointment.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">
                        Can I book appointments for family members or
                        dependents?
                    </div>
                    <div className="collapse-content text-sm text-gray-500">
                        Yes, in many cases, you can book appointments for family
                        members or dependents. However, you may need to provide
                        their personal information and consent to do so.
                    </div>
                </div>
            </div>
            {/* Questions end */}

            {/* Mobile app ad */}
            <div className="bg-gradient-to-br from-[#0e83fd] to-[#06aed4] w-[98%] md:w-[96%] lg:w-[90%] mx-auto mt-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                <div className="p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center">
                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Download the DoctorVai App today!
                        </h1>
                        <p className="mt-2 font-semibold text-white">
                            To download an app related to a doctor or medical
                            services, you can typically visit the app store on
                            your device.
                        </p>
                        <div className="flex gap-2 mt-4">
                            <Link to={"https://play.google.com/"}>
                                <img src={playStoreLogo} alt="Play Store" />
                            </Link>
                            <Link to={"https://www.apple.com/app-store/"}>
                                <img src={appStoreLogo} alt="App Store" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-6">
                    <img
                        className="h-[450px] z-[10]"
                        src={mobileImage}
                        alt="Mobile App"
                    />
                </div>

                {/* Shapes */}
                <img className="absolute bottom-0 left-4" src={appBg2} alt="" />
                <img className="absolute top-4 left-0" src={appBg3} alt="" />
                <img
                    className="absolute bottom-4 right-0 z-[0]"
                    src={appBg4}
                    alt=""
                />
                {/* Shapes end */}
            </div>
            {/* Mobile app ad end */}
        </div>
    );
};

export default FAQ;
