import Module from "./Module";
import '../styles/DayPlanner.css'

export function DayPlanner({

}) {

    return (
        <div className="module-container">
            <div className="module">
                <div className="button-container" id="add-module">
                    <h3>Add a new module</h3>
                    <div className="buttons">
                        <button className="circular-button" id="weather">Weather</button>
                        <button className="circular-button" id="recs">Clothing Recommendations</button>
                        <button className="circular-button" id="todoList">To-Do List</button>
                        <button className="circular-button" id="pomoTimer">Pomodoro Timer</button> 
                    </div>
                    
                </div>
                <div className="button-container" id="control-module">
                    <h3>Page controls</h3>
                    <div className="buttons">
                        <button className="circular-button" id="adjust-theme">Adjust Theme</button>
                        <button className="circular-button" id="edit-mode">Edit Mode</button>
                        <button className="circular-button" id="settings">Settings</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DayPlanner;