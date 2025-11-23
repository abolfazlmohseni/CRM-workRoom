const Task = ({ taskName, Estimate, SpentTime, Assignee, Priority, status }) => {
    return (
        <div>
            <div>
                <p>Task Name</p>
                <p>{taskName}</p>
            </div>
            <div>
                <div>
                    <p>Estimate</p>
                    <p>{Estimate}</p>
                </div>
                <div>
                    <p>Spent Time</p>
                    <p>{SpentTime}</p>
                </div>
                <div>
                    <p>Assignee</p>
                    <img src={Assignee} />
                </div>
                <div>
                    <p>Priority</p>
                    {
                        Priority === "Medium" ?
                            <p className="text-orange">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6129 4.2097L12.7071 4.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071C17.3466 11.0676 16.7794 11.0953 16.3871 10.7903L16.2929 10.7071L13 7.415V19C13 19.5523 12.5523 20 12 20C11.4872 20 11.0645 19.614 11.0067 19.1166L11 19V7.415L7.70711 10.7071C7.34662 11.0676 6.77939 11.0953 6.3871 10.7903L6.29289 10.7071C5.93241 10.3466 5.90468 9.77939 6.2097 9.3871L6.29289 9.29289L11.2929 4.29289C11.6534 3.93241 12.2206 3.90468 12.6129 4.2097Z" fill="#FFBD21" />
                                </svg>
                                Medium
                            </p>
                            : <p className="text-green">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6129 19.7903L12.7071 19.7071L17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929C17.3466 12.9324 16.7794 12.9047 16.3871 13.2097L16.2929 13.2929L13 16.585V5C13 4.44772 12.5523 4 12 4C11.4872 4 11.0645 4.38604 11.0067 4.88338L11 5V16.585L7.70711 13.2929C7.34662 12.9324 6.77939 12.9047 6.3871 13.2097L6.29289 13.2929C5.93241 13.6534 5.90468 14.2206 6.2097 14.6129L6.29289 14.7071L11.2929 19.7071C11.6534 20.0676 12.2206 20.0953 12.6129 19.7903Z" fill="#0AC947" />
                                </svg>
                                Low
                            </p>
                    }
                </div>
                <div>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    );
}

export default Task;
