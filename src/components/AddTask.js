
import '../styles/AddTask.css'

export const AddTask = ({ taskName,setTaskName,id,handleAddTasks }) => {
    
    return (
        <div className='d-flex justify-content-center'>
            <div className='addTask'>
                <form onSubmit={handleAddTasks}>
                    <div className=' p-3 d-flex justify-content-around align-items-center flex-wrap'>
                        <div>
                            <input onChange={(e)=>setTaskName(e.target.value)} className='form-control' name="task" type="text" placeholder='Add Task' value={taskName} />
                        </div>
                        <button type='submit' className='btn btn-primary m-2'>{id ? "Update" : "Add"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
