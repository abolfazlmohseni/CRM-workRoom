import SelectProject from "./components/SelectProject";
import ShowLocation from "./components/ShowLocation"
const Projects = () => {
    return (
        <div>
            <div className="mt-12 flex justify-between">
                <ShowLocation />
                <button className="flex gap-2 items-center text-white bg-primary py-2.5 px-4 rounded-[14px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.9933 5.88338C12.9355 5.38604 12.5128 5 12 5C11.4477 5 11 5.44772 11 6V11H6L5.88338 11.0067C5.38604 11.0645 5 11.4872 5 12C5 12.5523 5.44772 13 6 13H11V18L11.0067 18.1166C11.0645 18.614 11.4872 19 12 19C12.5523 19 13 18.5523 13 18V13H18L18.1166 12.9933C18.614 12.9355 19 12.5128 19 12C19 11.4477 18.5523 11 18 11H13V6L12.9933 5.88338Z" fill="white" />
                    </svg>
                    Add Project
                </button>
            </div>
            <section className="mt-7 flex gap-10">
                <div className="w-[18.5%] h-full bg-white rounded-3xl py-7 px-2 shadow">
                    <p className="font-bold pl-6">Current Projects</p>
                    <div className="mt-5 h-0.5 w-full bg-gray-200"></div>
                    <div>
                        <SelectProject title={"Medical App (iOS native)"} selected={true} />
                        <SelectProject title={"Food Delivery Service"} selected={false} />
                        <SelectProject title={"Fortune website"} selected={false} />
                        <SelectProject title={"Planner App"} selected={false} />
                        <SelectProject title={"Time tracker - personal account"} selected={false} />
                    </div>
                </div>
                <div className="w-[80%] h-full">
                    <div className="w-full flex items-center justify-between">
                        <p className="font-bold">Tasks</p>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21 5C21.5523 5 22 5.44772 22 6C22 6.51284 21.614 6.93551 21.1166 6.99327L21 7H3C2.44772 7 2 6.55228 2 6C2 5.48716 2.38604 5.06449 2.88338 5.00673L3 5H21ZM21 11C21.5523 11 22 11.4477 22 12C22 12.5128 21.614 12.9355 21.1166 12.9933L21 13H3C2.44772 13 2 12.5523 2 12C2 11.4872 2.38604 11.0645 2.88338 11.0067L3 11H21ZM22 18C22 17.4477 21.5523 17 21 17H3L2.88338 17.0067C2.38604 17.0645 2 17.4872 2 18C2 18.5523 2.44772 19 3 19H21L21.1166 18.9933C21.614 18.9355 22 18.5128 22 18Z" fill="#3F8CFF" />
                                </svg>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21 2C21.5523 2 22 2.44772 22 3C22 3.51284 21.614 3.93551 21.1166 3.99327L21 4H3C2.44772 4 2 3.55228 2 3C2 2.48716 2.38604 2.06449 2.88338 2.00673L3 2H21ZM20 7.76923V14.2308C20 15.7602 18.6569 17 17 17H16C14.3431 17 13 15.7602 13 14.2308V7.76923C13 6.23983 14.3431 5 16 5H17C18.6569 5 20 6.23983 20 7.76923ZM18 14.1111V7.88889C18 7.39797 17.5523 7 17 7H16C15.4477 7 15 7.39797 15 7.88889V14.1111C15 14.602 15.4477 15 16 15H17C17.5523 15 18 14.602 18 14.1111ZM8 5H7C5.34315 5 4 6.42709 4 8.1875V18.8125C4 20.5729 5.34315 22 7 22H8C9.65685 22 11 20.5729 11 18.8125V8.1875C11 6.42709 9.65685 5 8 5ZM7 7H8C8.55228 7 9 7.48502 9 8.08333V18.9167C9 19.515 8.55228 20 8 20H7C6.44772 20 6 19.515 6 18.9167V8.08333C6 7.48502 6.44772 7 7 7Z" fill="#0A1629" />
                                </svg>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5128 2 12.9355 2.38604 12.9933 2.88338L13 3V4H15C16.6569 4 18 5.34315 18 7V8C18 9.65685 16.6569 11 15 11H13V13H19C20.6569 13 22 14.3431 22 16V17C22 18.6569 20.6569 20 19 20H13V21C13 21.5523 12.5523 22 12 22C11.4872 22 11.0645 21.614 11.0067 21.1166L11 21V20H10C8.34315 20 7 18.6569 7 17V16C7 14.3431 8.34315 13 10 13H11V11H5C3.34315 11 2 9.65685 2 8V7C2 5.34315 3.34315 4 5 4H11V3C11 2.44772 11.4477 2 12 2ZM12 18H19C19.5523 18 20 17.5523 20 17V16C20 15.4477 19.5523 15 19 15H10C9.44772 15 9 15.4477 9 16V17C9 17.5523 9.44772 18 10 18H12ZM15 9H12H5C4.44772 9 4 8.55228 4 8V7C4 6.44772 4.44772 6 5 6H12H15C15.5523 6 16 6.44772 16 7V8C16 8.55228 15.5523 9 15 9Z" fill="#0A1629" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6 2H17.0926C17.8274 2 18.5366 2.26964 19.0857 2.75777C20.3241 3.85853 20.4356 5.75474 19.3349 6.99309L14.5463 12.379V18.7639C14.5463 19.0598 14.4912 19.3523 14.3845 19.6269L14.2948 19.8292C13.7065 21.0058 12.2757 21.4827 11.0991 20.8944L10.2047 20.4472C9.18832 19.939 8.54631 18.9002 8.54631 17.7639V12.381L3.75777 6.99309C3.31845 6.49885 3.05611 5.87498 3.00804 5.21952L3 5C3 3.34315 4.34315 2 6 2ZM17.0926 4H6C5.44772 4 5 4.44772 5 5C5 5.24491 5.08988 5.48131 5.25259 5.66436L10.2937 11.3356C10.4564 11.5187 10.5463 11.7551 10.5463 12V17.7639C10.5463 18.1427 10.7603 18.489 11.0991 18.6584L11.9935 19.1056C12.1822 19.1999 12.4116 19.1234 12.506 18.9348C12.5325 18.8817 12.5463 18.8232 12.5463 18.7639V12C12.5463 11.7551 12.6362 11.5187 12.7989 11.3356L17.84 5.66436C18.207 5.25158 18.1698 4.61951 17.757 4.25259C17.5739 4.08988 17.3375 4 17.0926 4Z" fill="#0A1629" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-10 mt-6 content-center font-bold bg-gray-200 text-center rounded-[14px]">
                        <p>Active Tasks</p>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Projects;
