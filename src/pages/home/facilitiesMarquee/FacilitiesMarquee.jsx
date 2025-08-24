import Marquee from "react-fast-marquee";

const FacilitiesMarquee = () => {
    return (
        <div className="bg-[#07a7db] p-4 my-10 text-white">
            <Marquee pauseOnHover={true} speed={20}>
                <h1 className="mx-4">--Hospital & Clinics--</h1>
                <h1 className="mx-4">--Healthcare Service--</h1>
                <h1 className="mx-4">--Lab Testing Service--</h1>
                <h1 className="mx-4">--Pharmacy Service--</h1>
                <h1 className="mx-4">--Multi specialty treatment doctors--</h1>
                <h1 className="mx-4">--Talk to doctors--</h1>
                <h1 className="mx-4">--Medicine Supplies--</h1>
            </Marquee>
        </div>
    );
};

export default FacilitiesMarquee;
