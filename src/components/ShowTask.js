import '../styles/ShowTask.css';

export const ShowTask = ({ tasks, setTasks,handleEdit }) => {

    return (
        <div className='d-flex justify-content-center mt-4'>
            <div className='showTask p-3'>
                <div className='d-flex align-items-center p-2'>
                    <div style={{ fontWeight: "bolder", fontSize: "125%" }}>Todo</div>
                    <div className='countTask ms-3 p-2'>{tasks.length}</div>
                    <div onClick={() => setTasks([])} className='btn btn-danger ms-auto'>Clear All</div>
                </div>
                {tasks.length ? <hr /> : ""}
                <ul className='d-flex justify-content-around flex-wrap'>
                    {tasks.map((e) => <li key={e.id}>
                        <div className='d-flex align-items-between'>
                            <div>
                                <div className='taskName'>{e.name}</div>
                                <div className='taskTime'>{e.time}</div>
                            </div>
                            <div className='ms-2'>
                                <i onClick={() => handleEdit(e.id)}  className="bi bi-pencil-square " style={{ fontSize: "130%", color: "blue", cursor: "pointer" }}></i>
                                <i onClick={() => setTasks(tasks.filter(task => task.id !== e.id))} className="bi bi-trash " style={{ fontSize: "130%", padding: "4px", color: "green", cursor: "pointer" }}></i>
                            </div>
                        </div>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}
