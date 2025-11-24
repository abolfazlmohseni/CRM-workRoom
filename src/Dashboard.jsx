import ShowLocation from "./components/ShowLocation";
import UserCard from "./components/UserCard";
import Event from "./components/Event";
import Project from "./components/Project";
import { useEffect, useState } from "react";
const Dashboard = () => {
    const date = new Date()
    const nextMonth = new Date(date);
    nextMonth.setMonth(date.getMonth() + 1);
    const nextMonthName = nextMonth.toLocaleString("en-US", { month: "short" });
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getTopUser = async () => {
            try {
                const res = await fetch("http://localhost:3000/users?_start=1&_limit=8")
                const data = await res.json()
                setUsers(data)
            } catch (err) {
                console.log(err);
            }
        }
        getTopUser()
    }, []);


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
                        {
                            users.map(user => {
                                return <UserCard level={user.level} name={user.name} stak={user.stak} src={user.src} />
                            })
                        }
                    </div>
                </div>
                <div className="w-1/3 flex flex-col gap-y-6 bg-white rounded-3xl py-7 px-7.5">
                    <div className="flex justify-between items-center">
                        <p className="text-[22px] font-bold">Nearest Events</p>
                        <a href="/Nearest" className="flex text-primary ">
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
                <div className="w-1/3 flex flex-col gap-y-6 bg-white rounded-3xl py-7 px-7.5">
                    <p className="text-[22px] font-bold">Activity Stream</p>
                    <div>
                        <div className="flex items-center gap-4">
                            <img className="w-[50px] h-[50px] rounded-full" src="./src/assets/imags/userprofile.jpg" alt="image" />
                            <div>
                                <p className="font-bold">Oscar Holloway</p>
                                <p className="text-gray-400 text-sm">UI/UX Designer</p>
                            </div>
                        </div>
                        <div className="bg-primary-100 rounded-[14px] flex items-center py-4 px-5 gap-6 mt-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.008 11.1359C21.408 9.13593 19.608 7.63593 17.608 7.63593H16.408C15.708 4.63593 13.208 2.43593 10.208 2.03593C7.20803 1.73593 4.30803 3.33593 2.90803 6.03593C1.70803 8.53593 1.44282 12.6556 3.70042 15.0548C4.31486 15.3028 5.113 15.5059 6.03044 15.6673C6.08816 15.3379 6.22831 15.0143 6.45391 14.7252L6.57958 14.5858L10.5796 10.5858C11.2947 9.87067 12.428 9.80407 13.2205 10.4203L13.2686 10.4602L13.408 10.5858L17.408 14.5858C17.7708 14.9486 17.9651 15.4162 17.9908 15.8911C19.6102 15.7009 20.839 15.416 21.31 15.0548C22.308 14.322 22.308 12.5359 22.008 11.1359ZM16.0031 17C16.2559 16.9977 16.508 16.9 16.7009 16.7071C17.0914 16.3166 17.0914 15.6835 16.7009 15.2929L12.7009 11.2929L12.6067 11.2097C12.2144 10.9047 11.6472 10.9324 11.2867 11.2929L7.28668 15.2929L7.20349 15.3871C7.10299 15.5164 7.03862 15.6646 7.01036 15.8182C7.01238 15.8185 7.0144 15.8188 7.01642 15.819C6.95925 16.1314 7.05141 16.4656 7.29289 16.7071L7.3871 16.7903C7.56775 16.9308 7.7855 17.0007 8.00308 17C8.2559 16.9977 8.508 16.9 8.7009 16.7071L10.9938 14.415V16.1314C10.9959 16.1314 10.9979 16.1315 11 16.1316V21L11.0067 21.1166C11.0645 21.614 11.4872 22 12 22C12.0011 22 12.0021 22 12.0032 22C12.5511 21.995 12.9938 21.5492 12.9938 21V14.415L14.7076 16.1282C14.7096 16.1281 14.7116 16.1281 14.7137 16.128L15.2929 16.7071L15.3871 16.7903C15.5678 16.9308 15.7855 17.0007 16.0031 17Z" fill="#3F8CFF" />
                            </svg>
                            <p className="w-3/4">Updated the status of Mind Map task to In Progress</p>
                        </div>
                        <div className="bg-primary-100 rounded-[14px] flex items-center py-4 px-5 gap-6 mt-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2412 1.46512C14.1947 -0.488373 17.362 -0.488373 19.3154 1.46512C21.2097 3.35941 21.2671 6.395 19.4873 8.35882L19.3151 8.53972L10.1154 17.7293C8.94344 18.9013 7.04324 18.9013 5.87123 17.7293C4.7461 16.6042 4.7011 14.808 5.73658 13.6288L5.87165 13.4847L14.3616 5.0047C14.7524 4.61441 15.3856 4.61478 15.7759 5.00553C16.1361 5.36623 16.1635 5.93348 15.8583 6.32559L15.775 6.41975L7.28544 14.8993C6.89448 15.2903 6.89448 15.9242 7.28544 16.3151C7.64633 16.676 8.21419 16.7038 8.60722 16.3981L8.70161 16.3147L17.9012 7.12512C19.0737 5.95268 19.0737 4.05177 17.9012 2.87933C16.7757 1.75379 14.9788 1.70877 13.7995 2.74427L13.6554 2.87933L4.46544 12.0693C2.51152 14.0233 2.51152 17.1912 4.46544 19.1451C6.36016 21.0398 9.39642 21.0972 11.3603 19.3174L11.5412 19.1451L20.7312 9.95512C21.1218 9.56459 21.7549 9.56459 22.1454 9.95512C22.5059 10.3156 22.5337 10.8828 22.2286 11.2751L22.1454 11.3693L12.9554 20.5593C10.2205 23.2943 5.7862 23.2943 3.05123 20.5593C0.378415 17.8865 0.31767 13.5908 2.86899 10.8442L3.05123 10.6551L12.2412 1.46512Z" fill="#6D5DD3" />
                            </svg>
                            <p className="w-3/4">Attached files to the task</p>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <img className="w-[50px] h-[50px] rounded-full" src="./src/assets/imags/userprofile.jpg" alt="image" />
                            <div>
                                <p className="font-bold">Oscar Holloway</p>
                                <p className="text-gray-400 text-sm">UI/UX Designer</p>
                            </div>
                        </div>
                        <div className="bg-primary-100 rounded-[14px] flex items-center py-4 px-5 gap-6 mt-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2412 1.46512C14.1947 -0.488373 17.362 -0.488373 19.3154 1.46512C21.2097 3.35941 21.2671 6.395 19.4873 8.35882L19.3151 8.53972L10.1154 17.7293C8.94344 18.9013 7.04324 18.9013 5.87123 17.7293C4.7461 16.6042 4.7011 14.808 5.73658 13.6288L5.87165 13.4847L14.3616 5.0047C14.7524 4.61441 15.3856 4.61478 15.7759 5.00553C16.1361 5.36623 16.1635 5.93348 15.8583 6.32559L15.775 6.41975L7.28544 14.8993C6.89448 15.2903 6.89448 15.9242 7.28544 16.3151C7.64633 16.676 8.21419 16.7038 8.60722 16.3981L8.70161 16.3147L17.9012 7.12512C19.0737 5.95268 19.0737 4.05177 17.9012 2.87933C16.7757 1.75379 14.9788 1.70877 13.7995 2.74427L13.6554 2.87933L4.46544 12.0693C2.51152 14.0233 2.51152 17.1912 4.46544 19.1451C6.36016 21.0398 9.39642 21.0972 11.3603 19.3174L11.5412 19.1451L20.7312 9.95512C21.1218 9.56459 21.7549 9.56459 22.1454 9.95512C22.5059 10.3156 22.5337 10.8828 22.2286 11.2751L22.1454 11.3693L12.9554 20.5593C10.2205 23.2943 5.7862 23.2943 3.05123 20.5593C0.378415 17.8865 0.31767 13.5908 2.86899 10.8442L3.05123 10.6551L12.2412 1.46512Z" fill="#6D5DD3" />
                            </svg>
                            <p className="w-3/4">Attached files to the task</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <a href="#" className="flex text-primary">
                            <span>View more</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 9.29289C17.0676 9.65338 17.0953 10.2206 16.7903 10.6129L16.7071 10.7071L12.7071 14.7071C12.3466 15.0676 11.7794 15.0953 11.3871 14.7903L11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289C7.65338 8.93241 8.22061 8.90468 8.6129 9.2097L8.70711 9.29289L12 12.585L15.2929 9.29289C15.6534 8.93241 16.2206 8.90468 16.6129 9.2097L16.7071 9.29289Z" fill="#3F8CFF" />
                            </svg>
                        </a>
                    </div>


                </div>
            </section>
        </div>
    );
}

export default Dashboard;
