import React from "react";
import { FaCommentMedical, FaUserLock, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { RiHome3Line } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";

const NavBar = () => {
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
        <div className="navbar bg-base-100 shadow-sm px-1 md:px-10 lg:px-16">
            <div className="flex-1">
                <div>
                    <img className="w-[180px]" src={logo} alt="" />
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
        </div>
    );
};

export default NavBar;
