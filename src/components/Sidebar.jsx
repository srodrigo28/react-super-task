import SidebarButton from "./SiderbarButton";
import HomeIcon from "../assets/icons/home.svg?react";
import TaskIcon from "../assets/icons/tasks.svg?react";

const Sidebar = () => {
    // currentColor
    return (
        <div className="h-screen bg-white w-62">
            <div className="px-8 py-6 space=y-8">
                <h1 className=" text-[#a2eedc] text-2xl font-semibold mb-5">Super Task</h1>
                <p>
                    Um simples{""}
                    <span className="text-[#00AD85]"> organizador de tarefas</span>
                </p>
            </div>

            <div className="flex flex-col p-2 gap-2">
                <SidebarButton variant="uselected">
                    <HomeIcon src={HomeIcon} alt="Home Icone" />
                    Início
                </SidebarButton>
                <SidebarButton variant="selected">
                    <TaskIcon src={TaskIcon} alt="Task Icone" />
                    Minhas Tarefas
                </SidebarButton>
            </div>
        </div>
    )
}

export default Sidebar;