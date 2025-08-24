
const SectionHead = ({ subtitle, title }) => {
    return (
        <div className="text-center my-10 w-max mx-auto flex flex-col items-center gap-2">
            <h2 className="bg-[#016AE7] text-white w-max p-2 rounded-full">- {title} -</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012047]">{subtitle}</p>
        </div>
    );
};

export default SectionHead;
