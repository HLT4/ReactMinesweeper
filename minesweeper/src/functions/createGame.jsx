function createGame(game, settings) {
    console.log(game, settings);

    const table = document.createElement("table");
    let cellColor = 1;

    // Create rows * columns empty cells
    for (let i = 0; i < settings[0]; i++) {
	const tr = document.createElement("tr");

	cellColor = cellColor ? 0 : 1;

	for (let j = 0; j < settings[1]; j++) {
	    const td = document.createElement("td");
	    // Styles not done with tailwind because it doesn't have border: outset;
	    if (cellColor === 0) {
		td.className = "cell1";
		cellColor = 1;
	    } else {
		td.className = "cell2";
		cellColor = 0;
	    }

	    tr.appendChild(td);
	}
	table.appendChild(tr);
    }

    game.current.appendChild(table);
    console.log(game);
}

export default createGame;
