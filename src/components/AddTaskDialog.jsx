import { createPortal } from "react-dom";
import Input from "./Input";
import Button from "./Button";

const AddTaskDialog1 = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return createPortal(
        /* Overlay com desfoque (Glassmorphism) */
        <div className="fixed inset-0 flex items-center justify-center 
        bg-black/10 backdrop-blur-sm p-4">
            /* Card do Modal */
            <div className="bg-[#1a1a1a] border border-white/10 w-full 
                max-w-sm p-6 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300">
                /* Header */
                <div className="flex justify-between items-center mb-1">
                    <h1 className="text-xl font-bold text-white">Nova Tarefa</h1>
                    <button className="text-red-500 hover:text-white transition-colors text-2xl">x
                    </button>
                </div>
                
                <p className="text-xs text-gray-400 mb-6">Insira as informações abaixo para cadastrar.</p>
                
                /* Formulário */
                <div className="space-y-4">
                        <Input label="Título" />
                        <Input label="Descrição" />
                        <Input label="Data" />
                    /* Ações */
                    <div className="flex gap-3 justify-center items-center">
                        <Button className="bg-red-400"> Cancelar </Button>
                        <Button className="bg-green-400"> Adicionar </Button>
                    </div>
                </div>
            
            </div>
        </div>,
        document.body
    );
};

export default AddTaskDialog1;