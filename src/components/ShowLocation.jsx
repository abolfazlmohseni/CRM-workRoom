import { useLocation } from "react-router-dom";

const ShowLocation = () => {
    const { pathname } = useLocation();


    return (
        <>

            {
                pathname == null ? <h1 className="text-3xl font-bold">Dashboard</h1>

                    : <h1 className="text-3xl font-bold">{pathname.slice(1)}</h1>
            }

        </>

    );
}

export default ShowLocation;
