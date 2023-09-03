import './index.css'

export default function Card({ title = "No Title" }) {

    return (
        <div className="card">
            <div className="icon">
                <span className="material-icons">sports_soccer</span>
            </div>
            <div className="info">
                <div className="title">
                    <span>{title}</span>
                    {/* <span>5.30 am - 6.30 am</span> */}
                </div>
                <div className="note">Lorem ipsum dolor sit amet.</div>
                <div className="pill">
                    <span className="material-icons">radio_button_checked</span>
                    Sport
                </div>
            </div>
        </div>
    )
}