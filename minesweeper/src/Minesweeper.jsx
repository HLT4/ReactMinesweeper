import { useEffect } from "react";
import Table from "./Table.jsx";


function Minesweeper({ game, settings, mineCount, setMineCount }) {

    useEffect(() => {
        console.log("settings", settings);
    }, [settings]);

    return (
          <div className="flex justify-center">
            <Table game={game} settings={settings} mineCount={mineCount} setMineCount={setMineCount} />
          </div>          
    );
}

export default Minesweeper;
