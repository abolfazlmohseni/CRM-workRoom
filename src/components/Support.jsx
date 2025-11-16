const Support = ({ changeState }) => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-primary/15 ">
            <div className="bg-white w-2/5 h-3/4 py-7.5 px-14 rounded-3xl flex flex-col items-center">
                <div className="flex items-center justify-between w-full">
                    <p className="text-[22px] font-bold">Need some Help?</p>
                    <div onClick={changeState} className="bg-primary/15 rounded-2xl w-12 h-12 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.041 4.24251C19.601 3.82607 18.9125 3.82532 18.4716 4.2408L12.5 9.86811L6.52844 4.2408C6.08754 3.82532 5.39904 3.82607 4.95905 4.24251L4.89362 4.30444C4.41656 4.75595 4.41739 5.51573 4.89543 5.96621L10.768 11.5002L4.89543 17.0343C4.41739 17.4848 4.41656 18.2445 4.89362 18.696L4.95905 18.758C5.39904 19.1744 6.08754 19.1752 6.52844 18.7597L12.5 13.1324L18.4716 18.7597C18.9125 19.1752 19.601 19.1744 20.041 18.758L20.1064 18.696C20.5834 18.2445 20.5826 17.4848 20.1046 17.0343L14.232 11.5002L20.1046 5.96621C20.5826 5.51573 20.5834 4.75595 20.1064 4.30443L20.041 4.24251Z" fill="#0A1629" />
                        </svg>
                    </div>
                </div>
                <img src="./src/assets/imags/Supportbg.png" className="mt-5" />
                <p className="text-gray-400 w-4/5 text-left mt-7.5">Describe your question and our specialists will answer you within 24 hours.</p>
                <div className="w-full text-left mt-7.5">
                    <p className="text-gray-400 font-bold text-sm">Request Subject</p>
                    <div className="flex items-center justify-between border border-gray-300 rounded-xl mt-1.5 px-4 py-2.5">
                        <p className="text-gray-400 text-sm">Technical difficulites</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 9.29289C17.0676 9.65338 17.0953 10.2206 16.7903 10.6129L16.7071 10.7071L12.7071 14.7071C12.3466 15.0676 11.7794 15.0953 11.3871 14.7903L11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289C7.65338 8.93241 8.22061 8.90468 8.6129 9.2097L8.70711 9.29289L12 12.585L15.2929 9.29289C15.6534 8.93241 16.2206 8.90468 16.6129 9.2097L16.7071 9.29289Z" fill="#7D8592" />
                        </svg>
                    </div>
                </div>
                <div className="mt-7.5 w-full text-left">
                    <p className="text-gray-400 font-bold text-sm">Description</p>
                    <textarea name="description" placeholder="Add some description of the request" className="mt-2 border border-gray-300 py-2.5 px-4 outline-0 resize-none w-full rounded-xl h-full"></textarea>
                </div>
            </div>
        </div>
    );
}

export default Support;
