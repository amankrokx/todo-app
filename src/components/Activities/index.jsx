import { useContext, useEffect, useState } from "react";
import Card from "../Card/index.jsx";
import Context from "../Context/index.jsx";
import fetchCustomServerData from "../server/index.js";
import './index.css';


export default function Activities() {

    const { currentDate: date, iter, user } = useContext(Context);
    const [tasks, setTasks] = useState([])

    console.log("Activities rendered " + iter);

    useEffect(() => {
        // /todo/:from/:to/:skip/:take
        // :from is unix timestamp
        // :to is unix timestamp
        // :skip is number
        // :take is number

        const today = new Date();
        today.setDate(date);
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(date + 1);
        tomorrow.setHours(0, 0, 0, 0);

        fetchCustomServerData(`/todo/${today.getTime()}/${tomorrow.getTime()}/0/10`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(res => {
                if (res.todos) {
                    setTasks(res.todos)
                }
                else {
                    setTasks([])
                }
            })
    }, [date, iter, user.token])


    function getTasks () {
        if (!tasks) {
            return [
                <h3 key={1}>No tasks for today</h3>
            ];
        }
        const tasksForToday = tasks
        if (!tasksForToday) {
            return [
                <h3 key={1}>No tasks for today</h3>
            ];
        }
        const lis = tasksForToday.map((task) => {
            return <Card key={task.id} title={task.body} />
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