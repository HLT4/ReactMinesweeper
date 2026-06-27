/**
 * Creates the underlying minesweeper game by adding mines and numbers to cells
 * @param {Array} settings  [rows, columns, mines]
 * @param {Array} firstCell coordinates of the first clicked cell [row, col]
 */
function createGame(settings, firstCell) {
	const rows = settings[0];
	const cols = settings[1];
	const mines = settings[2];

	let grid = Array.from({ length: rows }, () => Array(cols).fill(0));

	for (let i = 0; i < mines; i++) {
		let x = Math.floor(Math.random() * cols);
		let y = Math.floor(Math.random() * rows);

		if (grid[x][y] === -1 || (x === firstCell[1] && y === firstCell[0])) {
			// Maybe not the best since this could technically lead to an infinite loop
			i--;
			continue;
		}

		grid[x][y] = -1;
	}

	for (let i = 0; i < rows; i++) {
		let row = "";
		for (let j = 0; j < cols; j++) {
			row += grid[i][j] === -1 ? "#" : 0;
			row += " ";
		}
		console.log(row)
	}
}

export default createGame;