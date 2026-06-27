/**
 * @returns React component for choosing the settings for the minesweeper game
 */
function Settings({ game, setSettings }) {

    console.log(game);

    const play = (event) => {
        event.preventDefault();
        const form = document.forms.settingsForm;
        const settingsInputs = form.settings;

        const validate = (element, msg) => {
            element.setCustomValidity(msg);
            element.reportValidity();
            element.setCustomValidity("");
        }

        let settings = [];

        for (let setting of settingsInputs) {
            const value = parseInt(setting.value);

            // Check if the input was a number
            if (isNaN(value)) {
                validate(setting, "Enter a number");
                return;
            }

            // TODO minimum and maximum sizes
            // TODO three difficulty levels instead of manual mine amounts

            // Check that the mine amount doesn't exceed the board size
            if (settings.length == 2 && value >= settings[0] * settings[1]) {
                validate(setting, `Mines cannot exceed or be equal to the  amount of tiles (${settings[0] * settings[1]})`);
                return;
            }

            settings.push(value);
        }

        setSettings(settings);
        form.reset();
    };

    // TODO instead of rows, columns and mines, maybe just a selection for
    // easy, medium or hard with a custom game as an option
    return (
        <>
          <form id="settingsForm" className="flex flex-col gap-2.5 w-xs p-3 pb-11 border rounded-lg bg-green-600 relative">
            <div className="justify-between">
              <label htmlFor="rows">Rows:</label>
              <input type="number" id="rows" name="settings" className="text-right border-solid border rounded-md float-right bg-white w-7/10"/>
            </div>
            <div>
                <label htmlFor="columns">Columns:</label>
                <input type="number" id="columns" name="settings" className="text-right border-solid border rounded-md float-right bg-white w-7/10"/>
            </div>
            <div>
                <label htmlFor="mines">Mines:</label>
                <input type="number" id="mines" name="settings" className="text-right border-solid border rounded-md float-right bg-white w-7/10"/>
            </div>
            <button onClick={play} className="w-3/10 border rounded-sm bg-green-500 absolute right-3 bottom-2.5">Play</button>
          </form>
        </>
    );
}


export default Settings;
