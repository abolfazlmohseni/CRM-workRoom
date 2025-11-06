const Header = () => {
    return (
        <header className="flex w-full justify-between">
            <div>
                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full border-0 bg-white rounded-lg pl-10 pr-3 py-2 outline-none"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
            <div className="flex gap-x-6">
                <div className="bg-white rounded-[14px] w-12 h-12 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C15.9511 2 19.169 5.13941 19.2961 9.06012L19.3 9.30112V13.8019C19.3 14.6917 19.9831 15.4218 20.8533 15.4962L21.1332 15.5094C22.2445 15.6286 22.2872 17.2401 21.2614 17.4741L21.1332 17.4954L21 17.5024H3L2.86683 17.4954C1.71106 17.3714 1.71106 15.6334 2.86683 15.5094L3.14668 15.4962C3.96851 15.4259 4.62352 14.7708 4.69376 13.9486L4.7 13.8019V9.30112C4.7 5.26886 7.96828 2 12 2ZM13.557 19.103C14.3277 19.103 14.8087 19.9381 14.422 20.6047C13.9211 21.4684 12.9983 22 12 22C11.0017 22 10.0789 21.4684 9.57796 20.6047C9.21064 19.9714 9.62639 19.1861 10.3296 19.1092L10.443 19.103H13.557ZM6.70442 9.0826C6.81899 6.25617 9.14611 4 12 4C14.9271 4 17.3 6.37335 17.3 9.30112V13.8019L17.3051 13.9984L17.3276 14.2563C17.3797 14.6817 17.504 15.0848 17.6878 15.453L17.714 15.502H6.285L6.3122 15.453L6.41182 15.2362C6.59742 14.7951 6.7 14.3105 6.7 13.8019V9.30112L6.70442 9.0826Z" fill="#0A1629" />
                    </svg>


                </div>
                <div className="px-3.5 py-2 bg-white rounded-[14px] flex items-center gap-x-2.5">
                    <img className="w-[30px] h-[30px] rounded-full" src="./src/assets/imags/userprofile.jpg" alt="user Profile" />
                    <span className="font-bold">abolfazl mohseni</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7071 9.29289C17.0676 9.65338 17.0953 10.2206 16.7903 10.6129L16.7071 10.7071L12.7071 14.7071C12.3466 15.0676 11.7794 15.0953 11.3871 14.7903L11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289C7.65338 8.93241 8.22061 8.90468 8.6129 9.2097L8.70711 9.29289L12 12.585L15.2929 9.29289C15.6534 8.93241 16.2206 8.90468 16.6129 9.2097L16.7071 9.29289Z" fill="#0A1629" />
                    </svg>

                </div>
            </div>

        </header>
    );
}

export default Header;
