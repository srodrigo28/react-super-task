import CheckIcon from '../assets/icons/check.svg?react';
import CheckLoaderCircle from '../assets/icons/loader-circle.svg?react';
import Details from '../assets/icons/details.svg?react';
import Trash from '../assets/icons/trash.svg?react';

const TaskItem = ({ task, handleCheckboxClick, handleDeleteTask }) => {

    const getStatusClass = () => {
        if (task.status === "done") {
            return "bg-green-300 opacity-60";
        } 
        else if (task.status === "in_progress") {
            return "bg-amber-300 opacity-60";
        } 
        else if (task.status === "not_started") {
            return "bg-red-300 opacity-60";
        }
    };

    return (
        <div
            className={`p-2 ml-3 items-center gap-2 flex rounded-lg justify-between shadow-md mb-4 
            cursor-pointer hover:shadow-lg text-xs transition-shadow duration-300 pr-4
            ${getStatusClass()}`}
        >
            <div className="flex gap-2 items-center">

                <label
                    className={`relative flex h-7 w-7 cursor-pointer
                    items-center justify-center rounded-lg border-2 border-white
                    ${getStatusClass()}`}
                >
                    <input
                        type="checkbox"
                        checked={task.status === "done"}
                        onChange={() => handleCheckboxClick(task.id, task.title)}
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0 peer"
                    />

                    {task.status === "done" && (
                        <CheckIcon className="animate-bounce" />
                    )}

                    {task.status === "in_progress" && (
                        <CheckLoaderCircle className="animate-spin text-white" />
                    )}
                </label>
                <p className='text-slate-500 text-[0.9rem] font-semibold tracking-wide'>{task.title}</p>
            </div>

            <div className="flex gap-1 items-center transition-all">
                <Details className="text-white hover:opacity-80 transition-all h-6 w-6" />
                <button onClick={ () => handleDeleteTask(task.id, task.title) }>
                    <Trash className="text-white h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
