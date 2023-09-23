import { useContext } from "react";
import Context from "../Context/index.jsx";
import fetchCustomServerData from "../server/index.js";
import "./index.css";

function Header () {

    const { currentDate: date, setIter, user, setUser } = useContext(Context)

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
        const task = getTask()
        if (!task) {
            return
        }

        // date is in hours, change to unix timestamp
        const today = new Date();
        today.setDate(date);

        // get data from local storage
        // call api PUT /todo
        /*
        {
            "body": "My Second todo on backend",
            "data": {
                "tags": ["test", "dev"]
            },
            "at": 1695025932609
        }
        */
        fetchCustomServerData("/todo", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify({
                body: task,
                data: {
                    tags: ["test", "dev"]
                },
                at: today.getTime()
            })
        })
            .then(res => {
                if (res.todo) {
                    setIter(i => i + 1)
                }
                else {
                    alert(res.message || "Something went wrong")
                }

            })
    }

    return <header>
        <div className="greeting">Good {getCurrentTime()}, BigO</div>
        <div className="add-task">
            <button className="btn" onClick={addTaskToLocalStorage}>
                <span className="material-icons">add</span>
            </button>
            <button className="btn" onClick={() => {
                localStorage.removeItem("token")
                setUser({ token: null })
            }}>
                <span className="material-icons">logout</span>
            </button>
        </div>
    </header>
}

export default Header;