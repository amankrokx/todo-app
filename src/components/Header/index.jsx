import { useContext } from "react";
import Context from "../Context/index.jsx";
import "./index.css";

function Header () {

    const { currentDate: date, setIter } = useContext(Context)

    console.log("Header rendered");
    function getCurrentTime () {
        // give wether it is afternoon , evening or morning
        let date = new Date();
        let hour = date.getHours();
        let time;

        if (hour >= 5 && hour < 12) {
            time = "Morning";
        } else if (hour >= 12 && hour < 17) {
            time = "Afternoon";
        } else if (hour >= 17 && hour < 20) {
            time = "Evening";
        } else {
            time = "Night";
        }

        return time;
    }

    function getTask () {
        const task = prompt("Enter your task");
        console.log(task);
        return task;
    }

    function addTaskToLocalStorage () {
        const task = getTask();
        if (!task) {
            return;
        }
        // get data from local storage
        let tasks = localStorage.getItem("tasks");
        const key = date
        if (!tasks) {
            tasks = {
                [key]: [task]
            }
        } else {
            tasks = JSON.parse(tasks);
            if (tasks[key]) {
                tasks[key].push(task);
            } else {
                tasks[key] = [task];
            }
        }
        const tasksString = JSON.stringify(tasks);
        localStorage.setItem("tasks", tasksString);
        setIter(i => i + 1);
    }

    return <header>
        <div className="greeting">Good {getCurrentTime()}, BigO</div>
        <div className="add-task">
            <button className="btn" onClick={addTaskToLocalStorage}>
                <span className="material-icons">add</span>
            </button>
        </div>
    </header>
}

export default Header;