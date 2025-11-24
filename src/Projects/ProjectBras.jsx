import Task from "../components/Task";
const ProjectBras = ({ tasks }) => {
    return (
        <>
            <div className="h-10 mt-6 content-center font-bold bg-gray-200 text-center rounded-[14px]">
                <p>Active Tasks</p>
            </div>
            <div className="mt-5 space-y-4">
                {tasks.slice(0, 6).map(task => {
                    return (
                        <Task taskName={task.taskName} Estimate={task.Estimate} SpentTime={task.SpentTime} Assignee={task.Assignee} Priority={task.Priority} status={task.status} />
                    )
                })}
            </div>
            <div className="h-10 mt-6 content-center font-bold bg-gray-200 text-center rounded-[14px]">
                <p>Backlog</p>
            </div>
            <div className="mt-5 space-y-4">
                {tasks.slice(6, 8).map(task => {
                    return (
                        <Task taskName={task.taskName} Estimate={task.Estimate} SpentTime={task.SpentTime} Assignee={task.Assignee} Priority={task.Priority} status={task.status} />
                    )
                })}
            </div>
        </>

    );
}

export default ProjectBras;
