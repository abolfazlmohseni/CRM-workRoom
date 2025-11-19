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
            <section className="mt-7">
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
                <div className="w-[60%] h-full"></div>
            </section>
        </div>

    );
}

export default Projects;
