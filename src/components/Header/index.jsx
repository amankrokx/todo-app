import React from "react";
import "./index.css";

function Header ({ time }) {

    return <header>
        <div className="greeting">Good {time}, BigO</div>
        <div className="add-task">
            <button className="btn">
                <span className="material-icons">add</span>
            </button>
        </div>
    </header>
}

export default Header;