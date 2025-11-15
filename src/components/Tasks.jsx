'use client';

import Button from "./Button";
import AddIcon from '../assets/icons/add.svg?react';
import TrashIcon from '../assets/icons/trash.svg?react';

import SunIcon from '../assets/icons/sun.svg?react';
import CloudSunIcon from '../assets/icons/cloud-sun.svg?react';
import MoonIcon from '../assets/icons/moon.svg?react';
import TaskItem from "./TaskItem";

import { useState } from "react";
import TASKS from "../constants/tasks";
import TasksSeparator from "./TasksSeparator";

const Tasks = () => {
    const [tasks, setTaks] = useState(TASKS);

    const handleCheckboxClick = (taskId, taskTitle) => {
        const newTasks = tasks.map(task => {
            if (task.id !== taskId) return task;
            if (task.status === "not_started") return { ...task, status: "in_progress" };
            if (task.status === "in_progress") return { ...task, status: "done" };
            if (task.status === "done") return { ...task, status: "not_started" };
            return task;
        });
        setTaks(newTasks);
    };

    const handleDeleteTask = (taskId, taskTitle) => {
        const deleteYes = confirm("Tem certeza que deseja deletar essa tarefa? " + taskTitle);
        if (deleteYes) {
            const newTasks = tasks.filter(task => task.id !== taskId);
            setTaks(newTasks);
        }
    };

    const mormingTasks = tasks.filter(task => task.time === 'morning');
    const afternoonTasks = tasks.filter(task => task.time === 'afternoon');
    const nightTasks = tasks.filter(task => task.time === 'evening');



    return (
        <div className="py-16 px-8 w-full mr-7">
            <div className="flex w-full justify-between">
                <div className="flex flex-col w-full justify-between">
                    <span className="text-sm max-[500px]:text-[1.4rem] max-[500px]:text-green-400 font-semibold text-[#00AD85]">
                        Super Tarefas
                    </span>
                    <h1 className="text-xl font-semibold text-green-600 hidden md:block lg:block">
                        Tasks Component
                    </h1>
                </div>

                <div className="flex gap-2 items-center">
                    <Button variant="secondary"> Remover tarefa<TrashIcon /> </Button>
                    <Button onClick={ () => alert('Hello how are you') } variant="primary"> Nova tarefa <AddIcon /> </Button>
                </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm mt-3 pr-9">
                    <TasksSeparator title="Manhã" icon={<SunIcon className="w-10 h-10" />} />
                    {mormingTasks.map(task => (
                        <TaskItem  key={task.id} task={task}
                            handleCheckboxClick={handleCheckboxClick}
                            handleDeleteTask={handleDeleteTask}
                        />
                    ))}

                <TasksSeparator title="Tarde" icon={<CloudSunIcon className="w-10 h-10" />} />
                    {afternoonTasks.map(task => (
                        <TaskItem  key={task.id} task={task}
                            handleCheckboxClick={handleCheckboxClick}
                            handleDeleteTask={handleDeleteTask}
                        />
                    ))}

                <TasksSeparator title="Noite" icon={<MoonIcon className="w-10 h-10" />} />
                    {nightTasks.map(task => (
                        <TaskItem key={task.id} task={task}
                            handleCheckboxClick={handleCheckboxClick}
                            handleDeleteTask={handleDeleteTask}
                        />
                    ))}
            </div>
        </div>
    );
};
export default Tasks;
