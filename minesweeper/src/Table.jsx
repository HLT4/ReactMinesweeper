
/**
 * @returns Minesweeper grid
 */
function Table({ settings }) {

    console.log("Table.jsx")
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
                    <td key={j} className="cell1"></td>
                );
                cellColor = 1;
            } else {
                tdt.push(
                    <td key={j} className="cell2"></td>
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