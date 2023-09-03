import { useContext } from "react";
import Card from "../Card/index.jsx";
import Context from "../Context/index.jsx";
import './index.css';


export default function Activities() {

    const { currentDate: date, iter } = useContext(Context);

    console.log("Activities rendered " + iter);

    function getTasks () {
        const tasks = window.localStorage.getItem('tasks')
        if (!tasks) {
            return [
                <h3 key={1}>No tasks for today</h3>
            ];
        }
        const tasksObj = JSON.parse(tasks);
        const tasksForToday = tasksObj[date];
        if (!tasksForToday) {
            return [
                <h3 key={1}>No tasks for today</h3>
            ];
        }
        const lis = tasksForToday.map((task, index) => {
            return <Card key={index} title={task} />
        })
        return lis;
    }

    return (
        <section className="bottom">
            <h5>Activities</h5>
            <div className="cards">
                {getTasks()}
            </div>
        </section>
    )
}