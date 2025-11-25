const UserCard = ({ name, stak, level, src, className }) => {
    return (
        <div className={`${className} rounded-3xl   bg-primary-100 py-[18px] px-9 flex flex-col items-center`}>
            <div className="border-2 border-r-white p-0.5 border-primary w-14 h-14 rounded-full overflow-hidden">
                <img className="rounded-full" src={src} alt="user photo" />
            </div>

            <p className="font-bold mt-5 text-center">{name}</p>
            <p className="text-sm font-light text-darklight text-center">{stak}</p>
            <button className="border border-darklight/50 rounded-sm text-darklight/60 text-xs mt-2 py-px px-0.5">{level}</button>
        </div>
    );
}

export default UserCard;
