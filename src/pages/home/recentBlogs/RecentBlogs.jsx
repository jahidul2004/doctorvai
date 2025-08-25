import { useEffect, useState } from "react";
import SectionHead from "../../../components/sectionHead/SectionHead";
import BlogCard from "../../../components/blogCard/BlogCard";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { RiHeadphoneFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blog.json")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });
    }, []);
    return (
        <div className="mb-10 py-10">
            {/* Header area */}
            <SectionHead title="Recent Blogs" subtitle="Stay updated with us" />
            {/* Header area end */}

            {/* Main content */}
            <div className="w-[98%] md:w-[96%] lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 lg:gap-6">
                {blogs?.slice(0, 4).map((blog) => (
                    <BlogCard key={blog.id} data={blog} />
                ))}
            </div>
            {/* Main content end */}

            {/* View all button */}
            <div className="flex items-center justify-center mt-8">
                <Link className="btn rounded-full bg-[#012047] text-white px-4 py-2">
                    View All Articles <FaChevronRight />
                </Link>
            </div>
            {/* View all button end */}

            {/* Contact card */}
            <div className="w-[98%] md:w-[96%] lg:w-[90%] mx-auto bg-gradient-to-r from-[#0e82fd] via-[#06aed4] to-[#06aed4] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 text-white p-6 md:p-8 lg:p-16 rounded-2xl items-center mt-8 md:mt-12 lg:mt-16">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Working for Your Better Health.
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center gap-2">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <RiHeadphoneFill
                                size={32}
                                className="text-[#0e82fd]"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold">Customer Support</h3>
                            <p>+8807650968***</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <AiOutlineMessage
                                size={32}
                                className="text-[#0e82fd]"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold">Drop us an email</h3>
                            <p>info@doctorvai.com</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact card end */}
        </div>
    );
};

export default RecentBlogs;
