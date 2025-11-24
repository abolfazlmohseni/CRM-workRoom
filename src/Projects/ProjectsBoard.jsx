
const taskStatus = ["To Do", "In Progress", "In Review", "Done"]

const ProjectsBoard = ({ tasks = [] }) => {
    return (
        <>
            <div className="mt-6 flex w-full gap-9">
                {
                    taskStatus.map(status => {
                        return (
                            <div className="p-1 bg-white w-1/4 rounded-3xl">
                                <p className="py-3.5 bg-gray-200 rounded-3xl text-center font-bold">{status}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="h-10 mt-5 content-center font-bold bg-gray-200 text-center rounded-[14px]">
                <p>Active Tasks</p>
            </div>
            <div className="flex gap-9">
                <div className="w-1/4 space-y-5 mt-5">
                    {
                        tasks.filter(task => task.status == "To Do").map(task => {
                            return (
                                <div className="p-5 bg-white rounded-3xl">
                                    <p className="text-sm text-gray-400 mb-1.5">{task.id}</p>
                                    <p>{task.taskName}</p>
                                    <div className="flex items-center justify-between mt-10">
                                        <div className="flex">
                                            <div className="text-gray-500 py-1.5 px-2.5 bg-gray-100 rounded-lg font-bold mr-1.5">
                                                <p>{task.Estimate}</p>
                                            </div>
                                            {
                                                task.Priority === "Medium" ?
                                                    <p className="text-orange flex items-center font-bold">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6129 4.2097L12.7071 4.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071C17.3466 11.0676 16.7794 11.0953 16.3871 10.7903L16.2929 10.7071L13 7.415V19C13 19.5523 12.5523 20 12 20C11.4872 20 11.0645 19.614 11.0067 19.1166L11 19V7.415L7.70711 10.7071C7.34662 11.0676 6.77939 11.0953 6.3871 10.7903L6.29289 10.7071C5.93241 10.3466 5.90468 9.77939 6.2097 9.3871L6.29289 9.29289L11.2929 4.29289C11.6534 3.93241 12.2206 3.90468 12.6129 4.2097Z" fill="#FFBD21" />
                                                        </svg>
                                                    </p>
                                                    : <p className="text-green flex items-center font-bold">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6129 19.7903L12.7071 19.7071L17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929C17.3466 12.9324 16.7794 12.9047 16.3871 13.2097L16.2929 13.2929L13 16.585V5C13 4.44772 12.5523 4 12 4C11.4872 4 11.0645 4.38604 11.0067 4.88338L11 5V16.585L7.70711 13.2929C7.34662 12.9324 6.77939 12.9047 6.3871 13.2097L6.29289 13.2929C5.93241 13.6534 5.90468 14.2206 6.2097 14.6129L6.29289 14.7071L11.2929 19.7071C11.6534 20.0676 12.2206 20.0953 12.6129 19.7903Z" fill="#0AC947" />
                                                        </svg>
                                                    </p>
                                            }
                                        </div>
                                        <img src={task.Assignee} className="w-6 h-6 rounded-full" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-1/4 space-y-5 mt-5">
                    {
                        tasks.filter(task => task.status == "In Progress").map(task => {
                            return (
                                <div className="p-5 bg-white rounded-3xl">
                                    <p className="text-sm text-gray-400 mb-1.5">{task.id}</p>
                                    <p>{task.taskName}</p>
                                    <div className="flex items-center justify-between mt-10">
                                        <div className="flex">
                                            <div className="text-gray-500 py-1.5 px-2.5 bg-gray-100 rounded-lg font-bold mr-1.5">
                                                <p>{task.Estimate}</p>
                                            </div>
                                            {
                                                task.Priority === "Medium" ?
                                                    <p className="text-orange flex items-center font-bold">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6129 4.2097L12.7071 4.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071C17.3466 11.0676 16.7794 11.0953 16.3871 10.7903L16.2929 10.7071L13 7.415V19C13 19.5523 12.5523 20 12 20C11.4872 20 11.0645 19.614 11.0067 19.1166L11 19V7.415L7.70711 10.7071C7.34662 11.0676 6.77939 11.0953 6.3871 10.7903L6.29289 10.7071C5.93241 10.3466 5.90468 9.77939 6.2097 9.3871L6.29289 9.29289L11.2929 4.29289C11.6534 3.93241 12.2206 3.90468 12.6129 4.2097Z" fill="#FFBD21" />
                                                        </svg>
                                                    </p>
                                                    : <p className="text-green flex items-center font-bold">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6129 19.7903L12.7071 19.7071L17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929C17.3466 12.9324 16.7794 12.9047 16.3871 13.2097L16.2929 13.2929L13 16.585V5C13 4.44772 12.5523 4 12 4C11.4872 4 11.0645 4.38604 11.0067 4.88338L11 5V16.585L7.70711 13.2929C7.34662 12.9324 6.77939 12.9047 6.3871 13.2097L6.29289 13.2929C5.93241 13.6534 5.90468 14.2206 6.2097 14.6129L6.29289 14.7071L11.2929 19.7071C11.6534 20.0676 12.2206 20.0953 12.6129 19.7903Z" fill="#0AC947" />
                                                        </svg>
                                                    </p>
                                            }
                                        </div>
                                        <img src={task.Assignee} className="w-6 h-6 rounded-full" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-1/4 space-y-5 mt-5">
                    {
                        tasks.filter(task => task.status == "In Review").map(task => {
                            return (
                                <div className="p-5 bg-white rounded-3xl">
                                    <p className="text-sm text-gray-400 mb-1.5">{task.id}</p>
                                    <p>{task.taskName}</p>
                                    <div className="flex items-center justify-between mt-10">
                                        <div className="flex">
                                            <div className="text-gray-500 py-1.5 px-2.5 bg-gray-100 rounded-lg font-bold mr-1.5">
                                                <p>{task.Estimate}</p>
                                            </div>
                                            {
                                                task.Priority === "Medium" ?
                                                    <p className="text-orange flex items-center font-bold">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6129 4.2097L12.7071 4.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071C17.3466 11.0676 16.7794 11.0953 16.3871 10.7903L16.2929 10.7071L13 7.415V19C13 19.5523 12.5523 20 12 20C11.4872 20 11.0645 19.614 11.0067 19.1166L11 19V7.415L7.70711 10.7071C7.34662 11.0676 6.77939 11.0953 6.3871 10.7903L6.29289 10.7071C5.93241 10.3466 5.90468 9.77939 6.2097 9.3871L6.29289 9.29289L11.2929 4.29289C11.6534 3.93241 12.2206 3.90468 12.6129 4.2097Z" fill="#FFBD21" />
                                                        </svg>
                                                    </p>
                                                    : <p className="text-green flex items-center font-bold">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6129 19.7903L12.7071 19.7071L17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929C17.3466 12.9324 16.7794 12.9047 16.3871 13.2097L16.2929 13.2929L13 16.585V5C13 4.44772 12.5523 4 12 4C11.4872 4 11.0645 4.38604 11.0067 4.88338L11 5V16.585L7.70711 13.2929C7.34662 12.9324 6.77939 12.9047 6.3871 13.2097L6.29289 13.2929C5.93241 13.6534 5.90468 14.2206 6.2097 14.6129L6.29289 14.7071L11.2929 19.7071C11.6534 20.0676 12.2206 20.0953 12.6129 19.7903Z" fill="#0AC947" />
                                                        </svg>
                                                    </p>
                                            }
                                        </div>
                                        <img src={task.Assignee} className="w-6 h-6 rounded-full" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-1/4 space-y-5 mt-5">
                    {
                        tasks.filter(task => task.status == "Done").map(task => {
                            return (
                                <div className="p-5 bg-white rounded-3xl">
                                    <p className="text-sm text-gray-400 mb-1.5">{task.id}</p>
                                    <p>{task.taskName}</p>
                                    <div className="flex items-center justify-between mt-10">
                                        <div className="flex">
                                            <div className="text-gray-500 py-1.5 px-2.5 bg-gray-100 rounded-lg font-bold mr-1.5">
                                                <p>{task.Estimate}</p>
                                            </div>
                                            {
                                                task.Priority === "Medium" ?
                                                    <p className="text-orange flex items-center font-bold">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6129 4.2097L12.7071 4.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071C17.3466 11.0676 16.7794 11.0953 16.3871 10.7903L16.2929 10.7071L13 7.415V19C13 19.5523 12.5523 20 12 20C11.4872 20 11.0645 19.614 11.0067 19.1166L11 19V7.415L7.70711 10.7071C7.34662 11.0676 6.77939 11.0953 6.3871 10.7903L6.29289 10.7071C5.93241 10.3466 5.90468 9.77939 6.2097 9.3871L6.29289 9.29289L11.2929 4.29289C11.6534 3.93241 12.2206 3.90468 12.6129 4.2097Z" fill="#FFBD21" />
                                                        </svg>
                                                    </p>
                                                    : <p className="text-green flex items-center font-bold">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6129 19.7903L12.7071 19.7071L17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929C17.3466 12.9324 16.7794 12.9047 16.3871 13.2097L16.2929 13.2929L13 16.585V5C13 4.44772 12.5523 4 12 4C11.4872 4 11.0645 4.38604 11.0067 4.88338L11 5V16.585L7.70711 13.2929C7.34662 12.9324 6.77939 12.9047 6.3871 13.2097L6.29289 13.2929C5.93241 13.6534 5.90468 14.2206 6.2097 14.6129L6.29289 14.7071L11.2929 19.7071C11.6534 20.0676 12.2206 20.0953 12.6129 19.7903Z" fill="#0AC947" />
                                                        </svg>
                                                    </p>
                                            }
                                        </div>
                                        <img src={task.Assignee} className="w-6 h-6 rounded-full" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="py-4 px-7.5 mt-6 content-center font-bold bg-gray-200 text-center rounded-[14px]">
                <p>Backlog</p>
                <div className="flex gap-7.5 mt-4">
                    {
                        tasks.slice(2, 5).map(task => {
                            return (
                                <div className="w-1/3 p-5 bg-white rounded-3xl">
                                    <p className="text-sm text-gray-400 mb-1.5 text-start">{task.id}</p>
                                    <p className="text-start">{task.taskName}</p>
                                    <div className="flex items-center justify-between mt-10">
                                        <div className="flex">
                                            <div className="text-gray-500 py-1.5 px-2.5 bg-gray-100 rounded-lg font-bold mr-1.5">
                                                <p>{task.Estimate}</p>
                                            </div>
                                            {
                                                task.Priority === "Medium" ?
                                                    <p className="text-orange flex items-center font-bold">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6129 4.2097L12.7071 4.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071C17.3466 11.0676 16.7794 11.0953 16.3871 10.7903L16.2929 10.7071L13 7.415V19C13 19.5523 12.5523 20 12 20C11.4872 20 11.0645 19.614 11.0067 19.1166L11 19V7.415L7.70711 10.7071C7.34662 11.0676 6.77939 11.0953 6.3871 10.7903L6.29289 10.7071C5.93241 10.3466 5.90468 9.77939 6.2097 9.3871L6.29289 9.29289L11.2929 4.29289C11.6534 3.93241 12.2206 3.90468 12.6129 4.2097Z" fill="#FFBD21" />
                                                        </svg>
                                                    </p>
                                                    : <p className="text-green flex items-center font-bold">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6129 19.7903L12.7071 19.7071L17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929C17.3466 12.9324 16.7794 12.9047 16.3871 13.2097L16.2929 13.2929L13 16.585V5C13 4.44772 12.5523 4 12 4C11.4872 4 11.0645 4.38604 11.0067 4.88338L11 5V16.585L7.70711 13.2929C7.34662 12.9324 6.77939 12.9047 6.3871 13.2097L6.29289 13.2929C5.93241 13.6534 5.90468 14.2206 6.2097 14.6129L6.29289 14.7071L11.2929 19.7071C11.6534 20.0676 12.2206 20.0953 12.6129 19.7903Z" fill="#0AC947" />
                                                        </svg>
                                                    </p>
                                            }
                                        </div>
                                        <img src={task.Assignee} className="w-6 h-6 rounded-full" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ProjectsBoard;
