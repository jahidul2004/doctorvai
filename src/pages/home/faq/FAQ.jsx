import SectionHead from "../../../components/sectionHead/SectionHead";

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
        </div>
    );
};

export default FAQ;
