const Button = ({ children, variant, size="large", onClick, className, ...rest }) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'primary':
                return 'bg-green-300 text-white hover:bg-green-500 hover:text-white';
            case 'danger':
                return 'bg-red-300 text-white hover:bg-red-500 hover:text-slate-200';
            case 'tertiary':
                return 'bg-gray-500 text-white hover:bg-gray-500 hover:text-slate-200';
            case 'ghost':
                return 'bg-gray-200-gray-500 hover:bg-gray-700 hover:text-slate-200';
            default:
                return 'bg-gray-300 text-black hover:bg-gray-400';
        }
    }
    
    const getSizeClasse = () => {
        if(size === "small") {
            return "py-1 text-xs"
        }
        if(size === "large") {
            return "py-2 text-sm"
        }

        if(size === "full") {
            return "py-2 text-md"
        }
    }

    return (
        <button onClick={onClick} 
            className={`w-34 hover:opacity-55 cursor-pointer flex gap-1 items-center 
            justify-center px-3 rounded-md 
            py-2 text-sm hover:bg-green-500 text-white transition-transform
            ${getVariantClasses()}
            ${className}
        ` }
        {...rest}
        >
            {children}
        </button>
    )
}

export default Button;