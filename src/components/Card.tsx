type Props = {
    position: string;
    location: string;
    companyName: string;
    date: string;
    applicants: number;
};

const Card = (props: Props) => {
    const { position, location, companyName, date, applicants } = props;
    return (
        <>
            <div className="flex bg-gray-700 p-6 w-[50vw]">
                <div className=" bg-white h-20 w-20 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="" height="50" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
                        <path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z" />
                    </svg>
                </div>
                <div className="flex-grow flex justify-between">
                    <div className="text-white ml-6">
                        <p className="text-xl mb-2">{position}</p>
                        <p className="text-sm">{companyName}</p>
                        <p className="text-sm">{location}</p>
                    </div>
                    <div className="text-white text-xl flex items-center">
                        <p>Skill match</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-sm rounded-b-lg bg-gray-600 text-white h-20 p-6 w-[50vw]">
                <p>{date} • {applicants} applicants</p>
                <div className="flex justify-center items-center">
                    <button type="button" className="focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-9 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">APPLY NOW</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Card