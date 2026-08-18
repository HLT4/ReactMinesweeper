

function Difficulty({ setSettings, setMineCount }) {

    return (
        <div className="flex flex-col gap-2.5 w-xs p-3 border rounded-lg bg-green-600">
            <div className="flex justify-evenly">
                <button onClick={ () => {setSettings([10, 10, 10]); setMineCount(10) } } className="w-3/10 border rounded-sm bg-green-500">
                    Easy
                </button>
                <button onClick={ () => {setSettings([14, 18, 40]); setMineCount(40) } } className="w-3/10 border rounded-sm bg-green-500">
                    Medium
                </button>
                <button onClick={ () => {setSettings([20, 24, 99]); setMineCount(99) } } className="w-3/10 border rounded-sm bg-green-500">
                    Hard
                </button>
            </div>
            <div className="flex justify-evenly">
                <button className="w-3/10 border rounded-sm bg-green-500">
                Custom
                </button>
            </div>
        </div>
    );
}

export default Difficulty;