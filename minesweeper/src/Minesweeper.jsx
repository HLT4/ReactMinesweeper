import { useEffect } from "react";
import Table from "./Table.jsx";


function Minesweeper({ ref, settings }) {

    useEffect(() => {
        console.log("settings", settings);
    }, [settings]);

    return (
          <div ref={ref} >
            <Table settings={settings}/>
          </div>          
    );
}

export default Minesweeper;
