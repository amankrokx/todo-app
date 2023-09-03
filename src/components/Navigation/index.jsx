import { useContext } from 'react';
import Context from '../Context/index.jsx';
import './index.css';

export default function Navigation () {

    const { currentDate: activeDay, setCurrentDate: setActiveDay } = useContext(Context)

    const activeCss = {
        borderTop: '3px solid var(--active-color)',
        backgroundColor: 'rgba(255, 255, 255, 0.15)'
    }

    console.log("Navigation rendered");

    function getNavList () {
        // start 2 days before 
        const date = new Date( new Date().getTime() - 2 * 24 * 60 * 60 * 1000);

        const lis = []
        for (let i = 0; i < 14; i++) {
            const day = date.toLocaleString('default', { weekday: 'short' });
            const dateOfMonth = date.getDate();
            const li = 
                <li 
                    style={activeDay === dateOfMonth ? activeCss : {}}
                    key={i}
                    onClick={() => setActiveDay(dateOfMonth)}
                >
                    <span>{day}</span>
                    <span>{dateOfMonth}</span>
                </li>
            lis.push(li);
            date.setDate(date.getDate() + 1);
        }

        return lis;
    }

    return (
        <nav>
            <ul>
                {getNavList()}
            </ul>
        </nav>
    )
}