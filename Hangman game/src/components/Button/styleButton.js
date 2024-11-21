function getButtonStyle(styleType) {
    if (styleType === "primary") {
        return "bg-blue-500 text-white";
    } else if (styleType === "secondary") {
        return "bg-gray-300 text-gray-800";
    } else if (styleType === "error") {
        return "bg-red-500 text-white";
    } else if (styleType === "success") {
        return "bg-green-500 text-white";
    } else if (styleType === "warning") {
        return "bg-yellow-500 text-white";
    }
}

export default getButtonStyle