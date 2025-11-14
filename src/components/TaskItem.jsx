import CheckIcon from '../assets/icons/check.svg?react';
import CheckLoaderCircle from '../assets/icons/loader-circle.svg?react';

const TaskItem = ({task}) => {
    // console.log("task item render ", task    );
    const getStatusClass = () => {
      if(task.status === "done") {
        return "bg-green-300 text-[#00AD85]";
      }else if(task.status === "in_progress") {
        return "bg-amber-300 text-[#E2A400] text-slate-500";
      }else if(task.status === "not_started") {
        return "bg-red-300 text-slate-400 text-slate-500";
      }
    }  
    return(
        <div className={` p-2 ml-3 items-center gap-2 flex rounded-lg shadow-md mb-4 
          cursor-pointer hover:shadow-lg text-xs transition-shadow duration-300 
          ${getStatusClass()}`}>
            <label className={`relative flex h-7 w-7 cursor-pointer
              items-center justify-center rounded-lg border-2 border-white
              ${getStatusClass()}`}
            >
              <input 
                  type="checkbox" 
                  checked={task.status === "done"}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0 peer"
               />
               {
                task.status === "done" && <CheckIcon   /> || 
                task.status === "in_progress" && <CheckLoaderCircle
                />
               }
            </label>
            { task.title }
        </div>
    )
}
export default TaskItem;