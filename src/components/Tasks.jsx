import Button from "./Button";
import AddIcon from '../assets/icons/add.svg?react';
import TrashIcon from '../assets/icons/trash.svg?react';

const Tasks = () => {
    return (
        <div className="py-16 px-8 w-full">

            <div className="flex w-full justify-between">

                <div className="flex flex-col w-full justify-between">
                    <span className="text-xs font-semibold text-[#00AD85]">
                        Super Tarefas
                    </span>
                    <h1 className="text-xl font-semibold">Tasks Component</h1>
                </div>

                <div className="flex gap-1 items-center">
                    <Button variant="ghost" className="">
                        Remover tarefa
                        <TrashIcon />
                    </Button>
                    <Button variant="primary" className="">
                        Nova tarefa
                        <AddIcon />
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Tasks;