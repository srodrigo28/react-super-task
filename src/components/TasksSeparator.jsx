const TasksSeparator = ({ title, icon }) => {
    return (
        <div className="py-1">
            <div className="flex gap-2 items-center border-b 
                border-solid border-[#F4F4F5]">
                {icon}
                <p className="text-[#9A9C9F]">{title}</p>
            </div>
        </div>
    )
}

export default TasksSeparator