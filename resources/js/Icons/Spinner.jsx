const Spinner = ({ size = "medium", color = "blue" }) => {
    const sizeClasses = {
        small: "w-4 h-4",
        medium: "w-8 h-8",
        large: "w-12 h-12",
    };
    const colorClasses = {
        blue: "border-blue-500",
        green: "border-green-500",
        red: "border-red-500",
    };
    return (
        <div
            className={`
            ${sizeClasses[size]}
            ${colorClasses[color]}
            border-4
            border-t-transparent
            rounded-full
            animate-spin
        `}
        />
    );
};
export default Spinner;
