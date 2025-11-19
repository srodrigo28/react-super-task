const Input = ({ label, ...rest }) => {
    return (

        <div className="space-y-1">
            <label className="text-sm font-semibold text=[#35383E]" htmlFor={rest.id}>{label}</label>
            <input className="px-4 shadow w-full py-3 text-gray-500 placeholder:text-xs 
                placeholder:text-gray-400 border-solid border border-[#ECECEC] rounded-lg outline-0"
                {...rest}
            />
        </div>
    )
}
export default Input;