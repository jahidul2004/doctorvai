import bg from "../../assets/background/footer-bg-05.png";
import shape1 from "../../assets/background/footer-bg-02.png";
import { FiSend } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return (
        <footer
            style={{
                backgroundImage: `url(${bg})`,
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -10,
            }}
            className="py-8 md:py-12 lg:py-18 footer sm:footer-horizontal bg-base-200 text-base-content p-10 relative"
        >
            {/* Design */}
            <div className="absolute right-0 h-full z-[-1]">
                <img className="h-full" src={shape1} alt="" />
            </div>
            {/* Design end */}
            <nav className="flex flex-col gap-2 md:gap-5">
                <h6 className="text-[#000F28] text-lg font-bold">Company</h6>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Feature</a>
                <a className="link link-hover">Works</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Locations</a>
            </nav>
            <nav className="flex flex-col gap-2 md:gap-5">
                <h6 className="text-[#000F28] text-lg font-bold">Treatments</h6>
                <a className="link link-hover">Dental</a>
                <a className="link link-hover">Cardiac</a>
                <a className="link link-hover">Spinal Cord</a>
                <a className="link link-hover">Surgery</a>
                <a className="link link-hover">Hair Growth</a>
            </nav>
            <nav className="flex flex-col gap-2 md:gap-5">
                <h6 className="text-[#000F28] text-lg font-bold">
                    Specialties
                </h6>
                <a className="link link-hover">Cardiologist</a>
                <a className="link link-hover">Dermatologist</a>
                <a className="link link-hover">Pediatrician</a>
                <a className="link link-hover">Orthopedist</a>
                <a className="link link-hover">Gynecologist</a>
            </nav>
            <nav className="flex flex-col gap-2 md:gap-5">
                <h6 className="text-[#000F28] text-lg font-bold">Utilities</h6>
                <a className="link link-hover">Pricing</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms of Service</a>
                <a className="link link-hover">Integrations</a>
            </nav>
            <form>
                <h6 className="text-[#000F28] text-lg font-bold">Newsletter</h6>
                <p>Subscribe and stay updated from the DoctorVai</p>
                <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="mt-3 border border-[#06aed4] p-1 rounded-full bg-white flex items-center gap-2">
                        <input
                            className="input border-none rounded-full"
                            type="email"
                            placeholder="username@site.com"
                        />
                        <button className="cursor-pointer btn btn-sm rounded-full bg-[#06aed4] text-white">
                            <FiSend /> Subscribe
                        </button>
                    </div>
                </fieldset>

                <div>
                    <h1 className="text-[#000F28] text-lg font-bold">
                        Connect With Us
                    </h1>
                    <div className="mt-2 flex gap-2">
                        <div className="bg-[#e2edff] w-12 h-12 rounded-full flex items-center justify-center">
                            <FaFacebook className="text-[#60646b]" size={24} />
                        </div>
                        <div className="bg-[#e2edff] w-12 h-12 rounded-full flex items-center justify-center">
                            <FaXTwitter className="text-[#60646b]" size={24} />
                        </div>
                        <div className="bg-[#e2edff] w-12 h-12 rounded-full flex items-center justify-center">
                            <FaInstagram className="text-[#60646b]" size={24} />
                        </div>
                        <div className="bg-[#e2edff] w-12 h-12 rounded-full flex items-center justify-center">
                            <IoLogoLinkedin
                                className="text-[#60646b]"
                                size={24}
                            />
                        </div>
                        <div className="bg-[#e2edff] w-12 h-12 rounded-full flex items-center justify-center">
                            <FaPinterest className="text-[#60646b]" size={24} />
                        </div>
                    </div>
                </div>
            </form>
        </footer>
    );
};

export default Footer;
