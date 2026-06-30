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
	console.log(grid)
	console.log(grid.length)

	for (let i = 0; i < mines; i++) {
		let x = Math.floor(Math.random() * cols);
		let y = Math.floor(Math.random() * rows);

		if (grid[y][x] === -1 || (x === firstCell[1] && y === firstCell[0])) {
			// Maybe not the best since this could technically lead to an infinite loop
			i--;
			continue;
		}

		// Place a mine at a random coordinate
		grid[y][x] = -1;

		// Update minecount on surrounding cells
		for (let j = x - 1; j <= x + 1; j++) {
			if (j < 0 || j >= grid[0].length) continue;

			for (let k = y - 1; k <= y + 1; k++) {
				if (k < 0 || k >= grid.length) continue;

				if (grid[k][j] != -1) {
					grid[k][j] += 1;
				}
			}
		}
	}

	// Debug-logging
	for (let i = 0; i < grid.length; i++) {
		let row = "";
		for (let j = 0; j < grid[0].length; j++) {
			row += grid[i][j] === -1 ? "#" : grid[i][j];
			row += " ";
		}
		console.log(row)
	}

	return grid;
}

export default createGame;