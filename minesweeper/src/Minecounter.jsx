//import { useEffect } from "react";

function Minecounter({ mineCount }) {

    if (mineCount === null) {
        return (<></>);
    }

    return (
        <div className="flex justify-center">
            <p className="text-2xl">{mineCount}💣</p>
        </div>
    );
}

export default Minecounter;