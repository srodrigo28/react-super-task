
const SidebarButton = ({ children, variant }) => {
    const getVariantClasses = () => {
        if (variant === "uselected") {
            return "text-slate-500"
        }

        if (variant === "selected") {
            return " bg-[#E6F7F8]"
        }
    }
    return (
        <a href="/" className={`px-3 py-3 text-[#00ADB5]  rouded-2xl border-2 border-[#E6F7F8] ${getVariantClasses()}`}>
            {children}
        </a>
    )
};

export default SidebarButton;