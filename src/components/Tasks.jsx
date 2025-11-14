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
    // todo: fetch tasks from api
    const [tasks, setTaks] = useState(TASKS)

    // console.log(tasks);

    // filter tasks by period
    const mormingTasks = tasks.filter(task => task.time === 'morning');
    const afternoonTasks = tasks.filter(task => task.time === 'afternoon');
    const nightTasks = tasks.filter(task => task.time === 'evening');

    return (
        <div className="py-16 px-8 w-full">
            <div className="flex w-full justify-between">
                <div className="flex flex-col w-full justify-between">
                    <span className="text-sm font-semibold text-[#00AD85]">
                        Super Tarefas
                    </span>
                    <h1 className="text-xl font-semibold text-slate-600">Tasks Component</h1>
                </div>

                <div className="flex gap-2 items-center">
                    <Button variant="secondary" className="">
                        Remover tarefa
                        <TrashIcon />
                    </Button>
                    <Button variant="primary" className="">
                        Nova tarefa
                        <AddIcon />
                    </Button>

                </div>
            </div >

            <div className="rounded-xl bg-white p-6 shadow-sm mt-3">
                <TasksSeparator title="Manhã" icon={<SunIcon />} />
                <div className="mb-2">
                    {mormingTasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </div>

                <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />
                <div className="mb-2">
                    {afternoonTasks.map((task) => (
                         <TaskItem key={task.id} task={task} />
                    ))}
                </div>

                <TasksSeparator title="Noite" icon={<MoonIcon />} />
                <div className="mb-2">
                    {nightTasks.map((task) => (
                         <TaskItem key={task.id} task={task} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tasks;