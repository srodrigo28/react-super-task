
const SidebarButton = ({ children, variant, icon }) => {
    const getVariantClasses = () => {
        if (variant === "uselected") {
            return "text-[#a2eedc]  border-[#a2eedc]"
        }

        if (variant === "selected") {
            return "bg-[#E6F7F8] text-[#00ADB5] border-none"
        }
    }
    return (
        <a href="/" className={`flex gap-1 px-3 py-3 rouded-2xl border rounded-sm ${getVariantClasses()}`}>
            {icon}
            {children}
        </a>
    )
};

export default SidebarButton;