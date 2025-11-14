import CheckIcon from '../assets/icons/check.svg?react';
import CheckLoaderCircle from '../assets/icons/loader-circle.svg?react';
import Details from '../assets/icons/details.svg?react';
import Trash from '../assets/icons/trash.svg?react';

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
        <div className={` p-2 ml-3 items-center gap-2 flex rounded-lg justify-between shadow-md mb-4 
          cursor-pointer hover:shadow-lg text-xs transition-shadow duration-300 pr-4
          ${getStatusClass()}`}>
            <div className='flex gap-2 items-center'>
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
                  task.status === "done" && <CheckIcon   className="animate-bounce"/> || 
                  task.status === "in_progress" && <CheckLoaderCircle className="animate-spin text-white"  />
                }
              </label>
              { task.title }
            </div>
            <div className='flex gap-1 items-center'>
              <Details className="text-white hover:opacity-80 transition-all" />
              <Trash className="text-white" />
            </div>
        </div>
    )
}
export default TaskItem;