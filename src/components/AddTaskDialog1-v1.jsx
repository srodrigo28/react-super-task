const AddTaskDialog1 = ({ isOpen }) => {
    if (!isOpen) return


    return (
        // <div className="fixed top-0 bottom-0 left-0 h-screen w-screen flex items-center justify-center bg-black/90 z-90">
            <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-90">
            <div className="bg-gray-100 h-60 w-60 z-10 p-5 rounded-md">
                <div className="flex justify-between">
                    <h1 className="text-xl text-gray-400">Add Task Dialog</h1>
                </div>
            </div>
        </div>
    )
}

export default AddTaskDialog1;