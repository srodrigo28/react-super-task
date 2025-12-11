import { createPortal } from "react-dom";
import Input from "./Input";
import Button from "./Button"
import "./AddTaskDialog.css"

const AddTaskDialog = ({ isOpen, handleDialogClose }) => {
    if (!isOpen) return

    return createPortal(
        // <div className="fixed top-0 bottom-0 left-0 h-screen w-screen flex items-center justify-center bg-black/90 z-90">
        <div className="fixed mx-auto inset-0 flex items-center justify-center bg-slate-800/90 z-90">

            <div className="bg-white shadow w-[78%] md:w-96 z-10 p-5 rounded-md mb-36">
                <div className="flex mx-auto flex-col justify-between">
                    <h2 className=" text-center text-xl font-semibold text-[#35383E]">Nova tarefa</h2>
                    <p className="text-center text-slate-500 text-sm mt-1">Insira as informações abaixo</p>
                
                    <div className="space-y-4 mb-3 mt-5">
                        <Input id="title"       label="Titulo" placeholder="insira o titulo da tarefa" />
                        <Input id="time"        label="Horário" placeholder="Horário"/>
                        <Input id="description" label="Descrição" placeholder="Descrição da tarefa" />
                    </div>
                    <div className="flex justify-center gap-3">
                        <Button onClick={handleDialogClose} variant="danger">Cancelar</Button>
                        <Button variant="primary">Salvar</Button>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default AddTaskDialog;