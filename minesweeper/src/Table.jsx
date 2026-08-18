import { useEffect, useRef } from "react";
import createGame from "./functions/createGame.js";

/**
 * @returns Minesweeper grid as React-component
 */
function Table({ game, settings, mineCount, setMineCount }) {

    const first = useRef(true);
    const lost = useRef(false);
    const cellsleft = useRef(-1);

    useEffect(() => {
        first.current = true;
        lost.current = false;
        cellsleft.current = settings[0] * settings[1] - settings[2];

        let nums = document.getElementsByClassName("cellNumber");
        while (nums.length > 0) {
            nums[0].remove();
        }

        const rows = document.getElementsByTagName("tbody")[0].children;

        let cellColor = 1;

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].children;
            
            if (settings[1] % 2 == 0) {
                cellColor = cellColor ? 0 : 1;
            }
            
            for (let j = 0; j < cells.length; j++) {
                cells[j].className = cellColor === 0 ? "cell1" : "cell2";    
                cellColor = cellColor === 1 ? 0 : 1;
            }
        }

    }, [settings])

    // Reveals mines and stops you from opening other cells and such
    const loseGame = () => {
        lost.current = true;

        const rows = document.getElementsByTagName("tbody")[0].children;

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].children;
            for (let j = 0; j < cells.length; j++) {
                if (game.current[i][j] === -1) {
                    if (cells[j].firstChild != null) {
                        cells[j].className = "pommi";
                        continue;
                    }
                    let p = document.createElement("p");
                    p.textContent = "💣";
                    p.className = "cellNumber";
                    cells[j].appendChild(p);
                    cells[j].className = "pommi";
                }
            }
        }

        alert("Fuck you, you suck! 🖕");

    }

    // Wins game
    const winGame = () => {
        // To stop clicking on cells
        lost.current = true;

        // TODO
        console.log("Win!");
        alert("Goo job! 👍")
    };

    // Opens surrounding cells near zeroes
    const handleZero = (coord) => {

        const y = coord[0] - 1;
        const x = coord[1] - 1;

        const rows = document.getElementsByTagName("tbody")[0].children;

        for (let i = 0; i <= 2; i++) {
            // Don't try to click cells out of bounds
            if (y + i === -1 || y + i >= rows.length) { continue; }
        
            //console.log("y", y, "i", i, "y+i", y + i)
            let row = rows[y + i].children;

            for (let j = 0; j <= 2; j++) {
                // Don't try to click cells out of bounds
                if (x + j === -1 || x + j >= row.length) { continue; }
                row[x + j].click();
            }

        }

    };

    // Click handler for left clicks
    const openCell = (e, coord) => {
        e.preventDefault();
        if (e.target.className === "klikattu" || e.target.firstChild != null) { return; }
        if (lost.current) { return; }

        e.target.className = "klikattu";
        // Create game if first click
        if (first.current) {
            console.log("first");
            first.current = false;
            game.current = createGame(settings, coord);
        }

        // console.log("game.current", game.current)

        let p = document.createElement("p");
        let num = game.current[coord[0]][coord[1]];
        p.textContent = num === -1 ? "💣" : (num === 0 ? " " : num);
        p.className = "cellNumber";
        e.target.appendChild(p);

        if (num === -1) {
            e.target.className = "pommi";
            console.log("lost")
            loseGame();
        } else {
            cellsleft.current = cellsleft.current - 1;
            
            if (num === 0) {
                handleZero(coord);
            }

            if (cellsleft.current === 0) {
                winGame();
            }
        }
    };

    // click handler for right clicks
    const flagCell = (e) => {
        e.preventDefault();

        if (lost.current) { return; }

        if (e.target.className === "klikattu") { return; }

        if (e.target.localName === "p") {
            if (e.target.textContent === "🚩") {
                e.target.remove();
                setMineCount(mineCount + 1);
            }
            return;
        }

        if (e.target.firstChild != null) {
            e.target.firstChild.remove();
            return;
        }

        let p = document.createElement("p");
        p.textContent = "🚩";
        p.className = "cellNumber";
        e.target.appendChild(p);

        setMineCount(mineCount - 1);
    };

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
                    <td key={j} className="cell1" onClick={(e) => openCell(e, [i, j])} onContextMenu={(e) => flagCell(e)}></td>
                );
                cellColor = 1;
            } else {
                tdt.push(
                    <td key={j} className="cell2" onClick={(e) => openCell(e, [i, j])} onContextMenu={(e) => flagCell(e)}></td>
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