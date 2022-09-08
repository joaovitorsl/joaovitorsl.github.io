import React from 'react';
import './style.css';

const Badge = ({ badge, number, title }) => {
    return (
        <div className="badge">
            <span className="badge-number" style={{ position: "absolute", bottom: "5px", right: "5px", fontSize: "8px" }}>{number}</span>
            { badge ? <img src={badge} alt="Logo da olimpíada" title={title} /> : "" }
        </div>
    );
}

export default Badge;