import { useEffect } from "react";
import Table from "./Table.jsx";


function Minesweeper({ game, settings }) {

    useEffect(() => {
        console.log("settings", settings);
    }, [settings]);

    return (
          <div>
            <Table game={game} settings={settings}/>
          </div>          
    );
}

export default Minesweeper;
