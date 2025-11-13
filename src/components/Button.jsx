const Button = ({ children, variant }) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'primary':
                return 'bg-green-300 text-white hover:bg-green-500 hover:text-white';
            case 'secondary':
                return 'bg-red-400 text-white hover:bg-red-500 hover:text-slate-200';
            case 'tertiary':
                return 'bg-gray-500 text-white hover:bg-gray-500 hover:text-slate-200';
            case 'ghost':
                return 'bg-gray-200-gray-500 hover:bg-gray-700 hover:text-slate-200';
            default:
                return 'bg-gray-300 text-black hover:bg-gray-400';
        }
    }
    return (
        <button className={`w-34 text-xs cursor-pointer flex gap-1 items-center justify-center py-2 px-3 rounded-md ${getVariantClasses()}`}>
            {children}
        </button>
    )
}

export default Button;