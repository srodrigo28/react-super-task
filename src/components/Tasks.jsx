'use client';

import Button from "./Button";
import AddIcon from '../assets/icons/add.svg?react';
import TrashIcon from '../assets/icons/trash.svg?react';

import SunIcon from '../assets/icons/sun.svg?react';
import CloudSunIcon from '../assets/icons/cloud-sun.svg?react';
import MoonIcon from '../assets/icons/moon.svg?react';

import { useState } from "react";
import TASKS from "../constants/tasks";

const Tasks = () => {
    // todo: fetch tasks from api
    const [Tasks, setTaks] = useState(TASKS)

    // filter tasks by period
    const mormingTasks = Tasks.filter(task => task.period === 'morning');
    const afternoonTasks = Tasks.filter(task => task.period === 'afternoon');
    const nightTasks = Tasks.filter(task => task.period === 'night');

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
            </div >

            <div className="rounded-xl bg-white p-6 shadow-md mt-3">
                <div className="py-6">
                    <div className="flex gap-2 items-center pb-2 border-b border-solid border-[#F4F4F5]">
                        <SunIcon />
                        <p className="text-[#9A9C9F]">Manhã</p>
                    </div>
                </div>

                <div className="py-6">
                    <div className="flex gap-2 items-center pb-2 border-b border-solid border-[#F4F4F5]">
                        <CloudSunIcon />
                        <p className="text-[#9A9C9F]">Tarde</p>
                    </div>
                </div>

                <div className="py-6">
                    <div className="flex gap-2 items-center pb-2 border-b border-solid border-[#F4F4F5]">
                        <MoonIcon />
                        <p className="text-[#9A9C9F]">Noite</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks;