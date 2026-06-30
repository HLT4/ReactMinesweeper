import { useEffect, useRef } from "react";
import createGame from "./functions/createGame.js";

/**
 * @param {Array} game Minesweeper grid as an array of integers
 * @returns Minesweeper grid as React-component
 */
function Table({ game, settings }) {

    const first = useRef(true);

    useEffect(() => {
        first.current = true;
    }, [settings])

    // Click handler
    const testi = (e, coord) => {
        // console.log("testi", e);
        console.log(e.target)
        // TODO keksi joku parempi
        if (e.target.className === "klikattu" || e.target.localName === "p") { return; }

        e.target.className = "klikattu";

        // Create game if first click
        if (first.current) {
            console.log("first");
            first.current = false;
            game.current = createGame(settings, coord);
        }

        console.log("game.current", game.current)

        let p = document.createElement("p");
        p.textContent = game.current[coord[0]][coord[1]];
        p.className = "cellNumber";
        e.target.appendChild(p);
    }

    if (!settings) { return ( <></> ); }

    let cellColor = 1;
    let table = [];

    for (let i = 0; i < settings[0]; i++) {
        let tdt = [];

        if (settings[1] % 2 == 0) {
            cellColor = cellColor ? 0 : 1;
        }

        for (let j = 0; j < settings[1]; j++) {
            if (cellColor === 0) {
                tdt.push(
                    <td key={j} className="cell1" onClick={(e) => testi(e, [i, j])}></td>
                );
                cellColor = 1;
            } else {
                tdt.push(
                    <td key={j} className="cell2" onClick={(e) => testi(e, [i, j])}></td>
                );
                cellColor = 0;
            }
        }

        table.push(
            <tr key={i}>{tdt}</tr>
        )
    }

    return (
        <>
            <table>
                <tbody>
                    {table}
                </tbody>
            </table>
        </>
    )
    
}

export default Table;