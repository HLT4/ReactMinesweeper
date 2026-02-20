
/**
 * @returns React component for choosing the settings for the minesweeper game
 */
function Settings() {

    const play = (event) => {
        event.preventDefault();
        const form = document.forms.settingsForm;
        const settingsInputs = form.settings;

        let settings = [];

        for (let setting of settingsInputs) {
            const value = parseInt(setting.value);

            if (isNaN(value)) {
                setting.setCustomValidity("Enter a number");
                setting.reportValidity();
                setting.setCustomValidity("");
                return;
            }

            settings.push(value);
        }

        console.log(settings)
        form.reset();
    };

    // TODO instead of rows, columns and mines, maybe just a selection for
    // easy, medium or hard with a custom game as an option
    return (
        <>
          <form id="settingsForm" className="flex flex-col gap-2.5 w-15/100 p-3 pb-11 border rounded-lg bg-green-600 relative">
            <div className="justify-between">
              <label htmlFor="rows">Rows:</label>
              <input type="number" id="rows" name="settings" className="text-right border-solid border rounded-md float-right bg-white"/>
            </div>
            <div>
                <label htmlFor="columns">Columns:</label>
                <input type="number" id="columns" name="settings" className="text-right border-solid border rounded-md float-right bg-white"/>
            </div>
            <div>
                <label htmlFor="mines">Mines:</label>
                <input type="number" id="mines" name="settings" className="text-right border-solid border rounded-md float-right bg-white"/>
            </div>
            <button onClick={play} className="w-3/10 border rounded-sm bg-green-400 absolute right-3 bottom-2.5">Play</button>
          </form>
        </>
    );
}


export default Settings;