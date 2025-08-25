import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import { FaUserLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const PatientLogin = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center my-10 py-10">
            <div>
                <Lottie animationData={registerLottie} loop={true} />
            </div>

            {/* Form */}
            <div>
                <form
                    className="p-4 md:p-6 lg:p-8 md:w-[400px] border border-gray-300 rounded-lg"
                    action=""
                >
                    <div className="flex items-center justify-between mb-2">
                        <h1 className="text-lg text-[#012047] font-bold">
                            Patient Login
                        </h1>
                        <p className="font-bold text-[#0B90F0]">
                            Are you a doctor?
                        </p>
                    </div>
                    <div className="border-b pb-4 border-gray-300 mb-4">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[#012047]">
                                Email
                            </legend>
                            <input
                                type="email"
                                className="input"
                                placeholder="Enter your email"
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[#011731]">
                                Password
                            </legend>
                            <input
                                type="password"
                                className="input"
                                placeholder="Enter your password"
                            />
                        </fieldset>

                        <button className="btn bg-[#0B90F0] text-white w-full mt-4">
                            <FaUserLock />
                            Login
                        </button>
                    </div>
                    <button className="btn border border-gray-300 text-[#0B90F0] w-full">
                        <FcGoogle />
                        Login With Google
                    </button>

                    <p className="mt-4 text-sm text-center">
                        Don't have an account?
                        <Link
                            to="/register/patient"
                            className=" text-[#0B90F0]"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </div>
            {/* Form end */}
        </div>
    );
};

export default PatientLogin;
