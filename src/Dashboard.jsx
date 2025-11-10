import ShowLocation from "./components/ShowLocation";
import UserCard from "./components/UserCard";
import Event from "./components/Event";
import Project from "./components/Project";
const Dashboard = () => {

    const date = new Date()
    const nextMonth = new Date(date);
    nextMonth.setMonth(date.getMonth() + 1);
    const nextMonthName = nextMonth.toLocaleString("en-US", { month: "short" });
    return (
        <div className="mt-12">
            <p>Welcome back, abolfazl!</p>
            <div className="mt-2.5 flex justify-between w-full">
                <ShowLocation />
                <div className="flex items-center gap-x-3 rounded-[14px] bg-slate-200 px-3.5 py-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7 3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4C19.2091 4 21 5.79086 21 8V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V8C3 5.79086 4.79086 4 7 4V3ZM15 6C15 6.55228 15.4477 7 16 7C16.5523 7 17 6.55228 17 6L17.1493 6.00549C18.1841 6.08183 19 6.94564 19 8V9H5V8L5.00549 7.85074C5.08183 6.81588 5.94564 6 7 6C7 6.55228 7.44772 7 8 7C8.55228 7 9 6.55228 9 6H15ZM19 11H5V18C5 19.0544 5.81588 19.9182 6.85074 19.9945L7 20H17C18.0544 20 18.9182 19.1841 18.9945 18.1493L19 18V11Z" fill="#0A1629" />
                    </svg>
                    <div className="flex gap-x-2 font-mono items-center mt-1">
                        <p>{nextMonthName} {date.getFullYear()},{date.getDate()}</p>
                        <p>-</p>
                        <p>{date.toLocaleString("en-US", { month: "short" })} {date.getFullYear()},{date.getDate()}</p>
                    </div>

                </div>
            </div>
            <section className="w-full flex gap-x-7.5 mt-7.5">
                <div className="bg-white rounded-3xl w-2/3 py-7 px-7.5">
                    <div className="flex items-center justify-between">
                        <p className="text-[22px] font-bold">Workload</p>
                        <a href="#" className="flex text-primary">
                            <span>View all</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.29289 7.29289C9.65338 6.93241 10.2206 6.90468 10.6129 7.2097L10.7071 7.29289L14.7071 11.2929C15.0676 11.6534 15.0953 12.2206 14.7903 12.6129L14.7071 12.7071L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071C8.93241 16.3466 8.90468 15.7794 9.2097 15.3871L9.29289 15.2929L12.585 12L9.29289 8.70711C8.93241 8.34662 8.90468 7.77939 9.2097 7.3871L9.29289 7.29289Z" fill="#3F8CFF" />
                            </svg>
                        </a>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-5">
                        <UserCard name={"Abolfazl Mohseni"} stak={"front-End developer"} level={"Junior"} />
                        <UserCard name={"Abolfazl Mohseni"} stak={"front-End developer"} level={"Junior"} />
                        <UserCard name={"Abolfazl Mohseni"} stak={"front-End developer"} level={"Junior"} />
                        <UserCard name={"Abolfazl Mohseni"} stak={"front-End developer"} level={"Junior"} />
                        <UserCard name={"Abolfazl Mohseni"} stak={"front-End developer"} level={"Junior"} />
                        <UserCard name={"Abolfazl Mohseni"} stak={"front-End developer"} level={"Junior"} />
                        <UserCard name={"Abolfazl Mohseni"} stak={"front-End developer"} level={"Junior"} />
                        <UserCard name={"Abolfazl Mohseni"} stak={"front-End developer"} level={"Junior"} />
                    </div>
                </div>
                <div className="w-1/3 flex flex-col gap-y-6 bg-white rounded-3xl py-7 px-7.5">
                    <div className="flex justify-between items-center">
                        <p className="text-[22px] font-bold">Nearest Events</p>
                        <a href="#" className="flex text-primary ">
                            <span>View all</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.29289 7.29289C9.65338 6.93241 10.2206 6.90468 10.6129 7.2097L10.7071 7.29289L14.7071 11.2929C15.0676 11.6534 15.0953 12.2206 14.7903 12.6129L14.7071 12.7071L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071C8.93241 16.3466 8.90468 15.7794 9.2097 15.3871L9.29289 15.2929L12.585 12L9.29289 8.70711C8.93241 8.34662 8.90468 7.77939 9.2097 7.3871L9.29289 7.29289Z" fill="#3F8CFF" />
                            </svg>
                        </a>
                    </div>
                    <Event color={"bg-primary"} title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
                    <Event color={"bg-fuchsia-400"} title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
                    <Event color={"bg-primary"} title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
                </div>
            </section>
            <section className="mt-12 flex w-full gap-x-7.5">
                <div className=" w-2/3">
                    <div className="flex justify-between items-center">
                        <p className="text-[22px] font-bold">Projects</p>
                        <a href="#" className="flex text-primary ">
                            <span>View all</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.29289 7.29289C9.65338 6.93241 10.2206 6.90468 10.6129 7.2097L10.7071 7.29289L14.7071 11.2929C15.0676 11.6534 15.0953 12.2206 14.7903 12.6129L14.7071 12.7071L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071C8.93241 16.3466 8.90468 15.7794 9.2097 15.3871L9.29289 15.2929L12.585 12L9.29289 8.70711C8.93241 8.34662 8.90468 7.77939 9.2097 7.3871L9.29289 7.29289Z" fill="#3F8CFF" />
                            </svg>
                        </a>
                    </div>
                    <div className="w-full mt-5 space-y-5">
                        <Project />
                        <Project />
                        <Project />
                    </div>
                </div>
                <div className="w-1/3 flex flex-col gap-y-6 bg-white rounded-3xl py-7 px-7.5"></div>
            </section>
        </div>
    );
}

export default Dashboard;
