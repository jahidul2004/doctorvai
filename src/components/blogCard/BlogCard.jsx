import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
            {/* Image area */}
            <div className="relative">
                <img
                    className="rounded-md w-full h-[200px] object-cover"
                    src={data.image}
                    alt={data.title}
                />

                <div className="absolute bottom-2 left-2 bg-white px-2 rounded-lg text-center font-bold">
                    <h1>{data?.publishedDate}</h1>
                </div>
            </div>
            {/* Image area end */}

            {/* Details area */}
            <div className="overflow-hidden">
                <p className="bg-[#06aed4] rounded-full text-white px-2 w-max">
                    {data?.category}
                </p>
                <h1 className="hover:text-[#06aed4] transition-all text-xl font-bold mt-3 text-[#2e3842]">
                    {data?.title}
                </h1>
                <p className="text-sm text-gray-500">{data?.description}</p>
            </div>
            {/* Details area end */}
        </div>
    );
};

export default BlogCard;
