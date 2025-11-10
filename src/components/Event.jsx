const Event = ({ color, title, date, time, arrow }) => {
    return (
        <div className="flex gap-4 py-1.5">
            <div className={`w-1 h-full ${color} rounded-full`} ></div>
            <div className="w-full">
                <div className="w-full flex items-center justify-between">
                    <p className="text-darklight font-bold w-2/3">{title}</p>
                    {
                        arrow === "top" ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6129 4.2097L12.7071 4.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071C17.3466 11.0676 16.7794 11.0953 16.3871 10.7903L16.2929 10.7071L13 7.415V19C13 19.5523 12.5523 20 12 20C11.4872 20 11.0645 19.614 11.0067 19.1166L11 19V7.415L7.70711 10.7071C7.34662 11.0676 6.77939 11.0953 6.3871 10.7903L6.29289 10.7071C5.93241 10.3466 5.90468 9.77939 6.2097 9.3871L6.29289 9.29289L11.2929 4.29289C11.6534 3.93241 12.2206 3.90468 12.6129 4.2097Z" fill="#FFBD21" />
                            </svg> :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6129 19.7903L12.7071 19.7071L17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929C17.3466 12.9324 16.7794 12.9047 16.3871 13.2097L16.2929 13.2929L13 16.585V5C13 4.44772 12.5523 4 12 4C11.4872 4 11.0645 4.38604 11.0067 4.88338L11 5V16.585L7.70711 13.2929C7.34662 12.9324 6.77939 12.9047 6.3871 13.2097L6.29289 13.2929C5.93241 13.6534 5.90468 14.2206 6.2097 14.6129L6.29289 14.7071L11.2929 19.7071C11.6534 20.0676 12.2206 20.0953 12.6129 19.7903Z" fill="#0AC947" />
                            </svg>
                    }
                </div>
                <div className="flex items-center justify-between mt-2.5">
                    <p className="text-gray-400">{date}</p>
                    <div className="text-gray-600 flex items-center justify-center gap-1 h-9 w-16 rounded-lg bg-gray-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12.9933 8.88338C12.9355 8.38604 12.5128 8 12 8C11.4477 8 11 8.44772 11 9V12.75L11.0072 12.8698C11.0498 13.2244 11.28 13.5333 11.6154 13.6731L14.6154 14.9231L14.7256 14.9617C15.2069 15.0997 15.7258 14.858 15.9231 14.3846L15.9617 14.2744C16.0997 13.7931 15.858 13.2742 15.3846 13.0769L13 12.083V9L12.9933 8.88338Z" fill="#7D8592" />
                        </svg>

                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;
