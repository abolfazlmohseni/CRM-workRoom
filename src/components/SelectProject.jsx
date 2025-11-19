const SelectProject = ({ title, selected }) => {
    return (
        <div className="flex gap-2 w-full mt-2.5">
            <div className={`${selected ? "rounded-[14px] bg-primary-100  " : ""} w-[94%] py-3.5 px-4`}>
                <p className="text-xs text-gray-400">k405760f</p>
                <p className={`${selected ? "font-bold" : ""} mb-2 mt-1.5`}>{title}</p>
                <a href="#" className="flex text-primary text-sm items-center">
                    <span>View details</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.29289 7.29289C9.65338 6.93241 10.2206 6.90468 10.6129 7.2097L10.7071 7.29289L14.7071 11.2929C15.0676 11.6534 15.0953 12.2206 14.7903 12.6129L14.7071 12.7071L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071C8.93241 16.3466 8.90468 15.7794 9.2097 15.3871L9.29289 15.2929L12.585 12L9.29289 8.70711C8.93241 8.34662 8.90468 7.77939 9.2097 7.3871L9.29289 7.29289Z" fill="#3F8CFF" />
                    </svg>
                </a>
            </div>
            <div className={`${selected ? "w-1 h-[106px] bg-primary rounded-2xl" : ""}`}></div>
        </div>
    );
}

export default SelectProject;
