import SidebarButton from "./SiderbarButton";

const Sidebar = () => {
    return (
        <div className="h-screen bg-white w-62">
            <div className="px-8 py-6 space=y-8">
                <h1 className=" text-[#00AD85] text-2xl font-semibold mb-5">Super Task</h1>
                <p>
                    Um simples{""}
                    <span className="text-[#00AD85]"> organizador de tarefas</span>
                </p>
            </div>

            <div className="flex flex-col p-2 gap-2">
                <SidebarButton variant="unselected">Início</SidebarButton>
                <SidebarButton variant="selected">Minhas Tarefas</SidebarButton>
            </div>
        </div>
    )
}

export default Sidebar;