import { Link } from "react-router-dom";

const SpecialtyCard = ({ path, image, icon, title, doctors }) => {
    return (
        <Link to={path}>
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                }}
                className="w-full h-[180px] rounded-xl"
            >
                <div className="bg-[#00000057] w-full h-full rounded-xl flex flex-col justify-center items-center text-white">
                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                        <img src={icon} alt={title} className="w-10 h-10" />
                    </div>
                </div>
            </div>
            <div className="text-center mt-2">
                <h1 className="text-lg font-bold text-[#016ae7]">{title}</h1>
                <p>{doctors} Doctors</p>
            </div>
        </Link>
    );
};

export default SpecialtyCard;
