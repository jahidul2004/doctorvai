import React, { useEffect, useState } from "react";
import {
    FaCommentMedical,
    FaFacebook,
    FaInstagram,
    FaPhoneSquareAlt,
    FaPinterest,
    FaUserLock,
    FaUserPlus,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { RiHome3Line } from "react-icons/ri";
import { FaUserDoctor, FaXTwitter } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { MdAlternateEmail, MdOutlineWatchLater } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";

const NavBar = () => {
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const links = (
        <>
            <li className="mx-0 md:mx-1 lg:mx-2">
                <NavLink to="/">
                    <RiHome3Line className="text-[#0E82FD] mr-1" />
                    Home
                </NavLink>
            </li>
            <li className="mx-0 md:mx-1 lg:mx-2">
                <NavLink to="/">
                    <FaUserDoctor className="text-[#0E82FD] mr-1" />
                    Doctors
                </NavLink>
            </li>
            <li className="mx-0 md:mx-1 lg:mx-2">
                <NavLink to="/">
                    <GiMedicines className="text-[#0E82FD] mr-1" />
                    Pharmacy
                </NavLink>
            </li>
            <li className="mx-0 md:mx-1 lg:mx-2">
                <NavLink to="/">
                    <FaCommentMedical className="text-[#0E82FD] mr-1" />
                    Blog
                </NavLink>
            </li>
            <li className="mx-0 md:mx-1 lg:mx-2">
                <NavLink
                    className="btn btn-sm rounded-full bg-gradient-to-r from-[#0E82FD] to-[#06aed4] text-md text-white border-none px-4"
                    to="/"
                >
                    <FaUserLock />
                    Sign In
                </NavLink>
            </li>
            <li className="mx-0 md:mx-1 lg:mx-2">
                <NavLink
                    className="bg-[#012047] btn btn-sm rounded-full text-md text-white border-none px-4"
                    to="/"
                >
                    <FaUserPlus />
                    Register
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            {/* Top Bar */}
            <div className=" bg-[#f9f9f9] hidden">
                <div className="w-[98%] md:w-[96%] lg:w-[90%] mx-auto flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                        <p className="flex items-center gap-2 text-sm">
                            <MdAlternateEmail className="text-[#0e82fd]" />
                            info@doctorvai.com
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <FaPhoneSquareAlt className="text-[#0e82fd]" />
                            +880178725****
                        </p>
                    </div>
                    <div>
                        {
                            //Showing current time and date
                            <p className="text-sm flex items-center gap-2">
                                <MdOutlineWatchLater className="text-[#0e82fd]" />
                                {dateTime}
                            </p>
                        }
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-[#e2edff] w-6 h-6 rounded-full flex items-center justify-center">
                            <FaFacebook className="text-[#60646b]" size={14} />
                        </div>
                        <div className="bg-[#e2edff] w-6 h-6 rounded-full flex items-center justify-center">
                            <FaXTwitter className="text-[#60646b]" size={14} />
                        </div>
                        <div className="bg-[#e2edff] w-6 h-6 rounded-full flex items-center justify-center">
                            <FaInstagram className="text-[#60646b]" size={14} />
                        </div>
                        <div className="bg-[#e2edff] w-6 h-6 rounded-full flex items-center justify-center">
                            <IoLogoLinkedin
                                className="text-[#60646b]"
                                size={14}
                            />
                        </div>
                        <div className="bg-[#e2edff] w-6 h-6 rounded-full flex items-center justify-center">
                            <FaPinterest className="text-[#60646b]" size={14} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Bar end */}
            <div className="drawer">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="sticky bg-white top-0 w-[96%] md:w-full mx-auto navbar px-1 md:px-10 lg:px-16">
                        <div className="flex-1">
                            <img className="w-[180px]" src={logo} alt="" />
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal px-1">
                                {links}
                            </ul>
                        </div>
                        <div className="flex-none lg:hidden border rounded-md border-[#06aed4] text-[#06aed4]">
                            <label
                                htmlFor="my-drawer-3"
                                aria-label="open sidebar"
                                className="btn btn-square btn-ghost"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-3"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content */}
                        <div className="flex justify-center my-4">
                            <img className="w-[180px]" src={logo} alt="" />
                        </div>
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
