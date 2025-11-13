import Event from "./components/Event";
const Nearest = () => {
    return (
        <div className="mt-14">
            <div>
                <a href="/Dashboard" className="flex text-primary ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.2097 11.3871L4.29289 11.2929L9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289C11.0676 6.65338 11.0953 7.22061 10.7903 7.6129L10.7071 7.70711L7.415 11H19C19.5523 11 20 11.4477 20 12C20 12.5128 19.614 12.9355 19.1166 12.9933L19 13H7.415L10.7071 16.2929C11.0676 16.6534 11.0953 17.2206 10.7903 17.6129L10.7071 17.7071C10.3466 18.0676 9.77939 18.0953 9.3871 17.7903L9.29289 17.7071L4.29289 12.7071C3.93241 12.3466 3.90468 11.7794 4.2097 11.3871Z" fill="#3F8CFF" />
                    </svg>
                    <span>Back to Dashboard</span>
                </a>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-4xl font-bold mt-2">Nearest Events</p>
                <button className="bg-primary text-white flex items-center py-3 px-5 rounded-[14px] gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.9933 5.88338C12.9355 5.38604 12.5128 5 12 5C11.4477 5 11 5.44772 11 6V11H6L5.88338 11.0067C5.38604 11.0645 5 11.4872 5 12C5 12.5523 5.44772 13 6 13H11V18L11.0067 18.1166C11.0645 18.614 11.4872 19 12 19C12.5523 19 13 18.5523 13 18V13H18L18.1166 12.9933C18.614 12.9355 19 12.5128 19 12C19 11.4477 18.5523 11 18 11H13V6L12.9933 5.88338Z" fill="white" />
                    </svg>
                    <span className="transition-all">add Event</span>
                </button>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-7.5">
                <Event color={"bg-primary"} addClass="bg-white py-8 px-4 rounded-xl hover:scale-[102%] transition-all" title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
                <Event color={"bg-primary"} addClass="bg-white py-8 px-4 rounded-xl hover:scale-[102%] transition-all" title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
                <Event color={"bg-primary"} addClass="bg-white py-8 px-4 rounded-xl hover:scale-[102%] transition-all" title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
                <Event color={"bg-primary"} addClass="bg-white py-8 px-4 rounded-xl hover:scale-[102%] transition-all" title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
                <Event color={"bg-primary"} addClass="bg-white py-8 px-4 rounded-xl hover:scale-[102%] transition-all" title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
                <Event color={"bg-primary"} addClass="bg-white py-8 px-4 rounded-xl hover:scale-[102%] transition-all" title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
                <Event color={"bg-primary"} addClass="bg-white py-8 px-4 rounded-xl hover:scale-[102%] transition-all" title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
                <Event color={"bg-primary"} addClass="bg-white py-8 px-4 rounded-xl hover:scale-[102%] transition-all" title={"Presentation of the new department"} time={"4h"} date={"Today | 5:00PM"} arrow={"top"} />
            </div>
        </div>
    );
}

export default Nearest;
