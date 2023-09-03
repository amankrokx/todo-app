import './index.css';

function Weather () {

    console.log("Weather rendered");

    return (
        <section className="weather">
            <div className="cloud">
                <span className="material-icons">ac_unit</span>
            </div>
            <div className="info">
                <div className="temperature">
                    25°
                    <span>C</span>
                </div>
                <div className="city">Bengaluru, Karnataka</div>
                <div className="activity-info">
                    <span className="material-icons">task_alt</span>
                    <span>Activities 4/10</span>
                </div>
            </div>
        </section>
    )
}

export default Weather;