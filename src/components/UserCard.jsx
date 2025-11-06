const UserCard = () => {
    return (
        <div className="rounded-3xl  bg-primary-100 py-[18px] px-9 flex flex-col items-center">
            <div className="border-2 border-r-white p-0.5 border-primary w-14 h-14 rounded-full overflow-hidden">
                <img className="rounded-full" src="./src/assets/imags/userprofile.jpg" alt="user photo" />
            </div>

            <p className="font-bold mt-5">abolfazl mosheni</p>
            <p className="text-sm font-light text-darklight">fornt-End developer</p>
            <button className="border border-darklight/50 rounded-sm text-darklight/60 text-xs mt-2 py-px px-0.5">Junior</button>
        </div>
    );
}

export default UserCard;
